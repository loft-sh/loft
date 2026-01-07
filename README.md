# vCluster Platform

**A powerful Kubernetes platform for managing virtual clusters, multi-tenancy, and cluster sharing**

vCluster Platform provides a single pane of glass that lets you connect your clusters, deploy virtual clusters, configure user access, and reduce operational costs. Built on top of Kubernetes, it enables teams to efficiently share cluster resources while maintaining strong isolation and self-service capabilities.

## 🚀 Features

### Core Platform Features

- **Projects**: Highest organizational unit for logically grouping resources by team or division with role-based access controls (RBAC)
- **Clusters**: Connect to and manage multiple physical Kubernetes clusters, deploying spaces, virtual clusters, and apps as needed
- **Virtual Clusters**: Lightweight virtual Kubernetes clusters that run inside a namespace within the host physical cluster - ideal for development, testing, and production workloads
- **Apps**: Define and deploy applications with configurable parameters across clusters, spaces, and virtual clusters using Kubernetes Manifests, bash scripts, Helm charts, and more
- **Cost Reduction Tools**: 
  - **Sleep Mode**: Put Kubernetes namespaces to sleep (sets `replicas: 0` for all replica-controlled resources), reducing cloud costs by up to 70%
  - **Auto Delete**: Configure auto-deletion for inactive virtual clusters
  - **Inactivity Detection**: Automatically detect and respond to namespace inactivity
- **Multi-Tenancy**: Granular RBAC at project, space, and virtual cluster levels
- **GitOps Ready**: All resources are defined as Custom Resource Definitions (CRDs) for GitOps workflows
- **RESTful API**: Comprehensive OpenAPI 3.0-compliant API for programmatic access and automation

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Architecture](#architecture)
- [Installation & Configuration](#installation--configuration)
- [API Documentation](#api-documentation)
- [Helm Charts](#helm-charts)
- [Configuration](#configuration)
- [Automatic Synchronization](#automatic-synchronization)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Resources](#resources)
- [Support](#support)
- [Next Steps](#next-steps)

<a id="quick-start"></a>
## 🏃 Quick Start

### Prerequisites

- **Kubernetes cluster** (v1.20+) with administrator access
- **Helm v3.10+** installed ([Helm Installation Guide](https://helm.sh/docs/intro/install/))
- **kubectl** installed and configured ([Install kubectl](https://kubernetes.io/docs/tasks/tools/))
- **License Key**: A LoftLabs license key is required (contact [sales@loft.sh](mailto:sales@loft.sh) for a license or trial)

### Resource Requirements

- **Pod Resources**:
  - Requests: `memory: 256Mi`, `cpu: 200m`
  - Limits: `memory: 4Gi`, `cpu: 2`
- **Network Ports**: Ensure the following ports are open:
  - `8443` – API service extension for cluster communication (`v1.cluster.loft.sh`)
  - `9443` – Webhook validation and enforcement (`loft webhook`)
  - `9444` – Management API for platform administration (`v1.management.loft.sh`)
  - `9090` – Prometheus metrics proxy for cost monitoring
- **Egress Traffic**: Allow egress to `https://admin.loft.sh/*` (HTTPS, port 443) for license retrieval and validation

### Installation Methods

#### Option 1: Using vCluster CLI (Recommended)

The vCluster CLI is the preferred method for deploying the platform. See the [Quick Start Guide](https://www.vcluster.com/docs/platform/install/quick-start-guide) for detailed instructions.

```bash
# Download and install vCluster CLI
# macOS (Intel/AMD)
curl -L -o vcluster "https://github.com/loft-sh/vcluster/releases/latest/download/vcluster-darwin-amd64" && \
  sudo install -c -m 0755 vcluster /usr/local/bin && rm -f vcluster

# Verify installation
vcluster --version

# Deploy the platform
vcluster platform start
```

The CLI automatically opens the UI in your browser and logs you in. You'll be prompted to create an administrator user.

#### Option 2: Using Helm

See the [Helm Installation Guide](https://www.vcluster.com/docs/platform/install/helm) for detailed instructions.

```bash
# Add the Loft Helm repository
helm repo add loft https://charts.loft.sh
helm repo update

# Deploy vCluster Platform
RELEASE_NAME=vcluster-platform
RELEASE_NAMESPACE=vcluster-platform

helm upgrade $RELEASE_NAME vcluster-platform \
  --install \
  --repo https://charts.loft.sh/ \
  --namespace $RELEASE_NAMESPACE \
  --create-namespace \
  --set admin.username=admin \
  --set admin.password=your-secure-password
```

#### Option 3: Using ArgoCD (GitOps)

For GitOps deployments, see the [ArgoCD Installation Guide](https://www.vcluster.com/docs/platform/install/gitops) for managing the platform deployment with ArgoCD or other GitOps tools.

### Access the Platform

After installation, you can access the platform in several ways:

1. **Loft Router** (Default): If `loftHost` is not configured, a random domain is automatically provisioned. Retrieve it with:
   ```bash
   kubectl get secret loft-router-domain \
     -n vcluster-platform \
     -o jsonpath="{.data.domain}" | base64 --decode
   ```

2. **Custom Ingress**: If you configured an ingress, access via your custom domain

3. **Port Forward**: For local access:
   ```bash
   kubectl port-forward -n vcluster-platform svc/vcluster-platform 8080:80
   ```

### Default Credentials

If not set in your values.yaml, the default credentials are:
- **Username**: `admin`
- **Password**: `my-password`

> **⚠️ Security Note**: It is strongly recommended to change these default credentials immediately after first login.

<a id="architecture"></a>
## 🏗️ Architecture

vcluster Platform consists of several key components:

- **Platform Controller**: Core orchestration engine managing virtual clusters, accounts, and resources
- **API Server**: RESTful API server exposing OpenAPI-compliant endpoints
- **Webhook Server**: Validating and mutating webhooks for resource management
- **Agent**: Lightweight agent deployed to managed clusters for multi-cluster operations

```
┌─────────────────────────────────────────────────────────┐
│                  vcluster Platform                      │
│                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │   API Server │  │  Controller  │  │   Webhook    │ │
│  └──────────────┘  └──────────────┘  └──────────────┘ │
│                                                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │         Virtual Cluster Management               │   │
│  │  • Create/Delete Virtual Clusters                │   │
│  │  • Sleep/Wake Operations                         │   │
│  │  • Resource Quotas & Limits                      │   │
│  └──────────────────────────────────────────────────┘   │
│                                                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │         Multi-Tenancy & Isolation                │   │
│  │  • Account Management                            │   │
│  │  • Namespace Templates                           │   │
│  │  • RBAC & Security Policies                      │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

<a id="installation--configuration"></a>
## 📦 Installation & Configuration

### Recommended Configuration

When deploying with Helm, it's recommended to explicitly set these values:

```yaml
admin:
  username: my-own-username
  password: my-secure-password

config:
  audit:
    enabled: true
  loftHost: vcluster-platform.mytld.com  # Publicly resolvable hostname

ingress:
  enabled: true
  host: vcluster-platform.mytld.com
  tls:
    enabled: true

# Environment variables for proxy configuration (if needed)
env:
  NO_PROXY: localhost,127.0.0.1,.svc,.svc.cluster.local,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16
  no_proxy: localhost,127.0.0.1,.svc,.svc.cluster.local,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16
```

### Loft Router

vCluster Platform provides a hosted domain service called **Loft Router** that enables you to trial the platform using a hosted domain. This is enabled by default and particularly useful when you cannot use your own DNS.

To disable Loft Router, either:
- Explicitly set `config.loftHost` and `config.devPodSubDomain`, or
- Set the environment variable `DISABLE_LOFT_ROUTER=true`

### Air-Gapped Installation

For environments without internet access, see the [Air-Gapped Installation Guide](https://www.vcluster.com/docs/platform/install/advanced/air-gapped) for detailed instructions on:
- Setting up a private OCI-compliant registry
- Populating the registry with container images and Helm charts
- Configuring vCluster Platform and agents for offline use

See `chart/values.yaml` for all available configuration options.

<a id="api-documentation"></a>
## 📚 API Documentation

vCluster Platform exposes a comprehensive RESTful API that is fully **OpenAPI 3.0 compliant**. The API documentation is automatically generated and synced to this repository.

### API Specs

- **OpenAPI Specification**: [`api/openapi-spec/openapi.yaml`](api/openapi-spec/openapi.yaml)
- **Swagger JSON**: [`api/openapi-spec/swagger.json`](api/openapi-spec/swagger.json)
- **Swagger Paths**: [`api/openapi-spec/swagger.paths.json`](api/openapi-spec/swagger.paths.json)

### API Endpoints

The API provides endpoints for:

- **Management API** (`/apis/management.loft.sh/v1/`): Core platform management operations
- **Cluster API** (`/apis/v1.cluster.loft.sh/`): Cluster communication and management
- **Virtual Cluster API**: Virtual cluster lifecycle management
- **Project API**: Project and resource management
- **User & Access API**: User management and access control

### Using the API

```bash
# Get API versions
curl https://your-vcluster-platform/api/apis/

# List virtual clusters
curl -H "Authorization: Bearer $TOKEN" \
  https://your-vcluster-platform/api/apis/management.loft.sh/v1/virtualclusters
```

For complete API reference, see the [API Documentation](https://www.vcluster.com/docs/platform/reference/api) in the official docs.

<a id="helm-charts"></a>
## 📊 Helm Charts

The Helm charts for vCluster Platform are **automatically synced** to this repository. The chart includes:

- **Deployment**: Main platform controller and API server
- **Service**: Kubernetes service for accessing the platform
- **Ingress**: Optional ingress configuration with TLS support
- **RBAC**: Service accounts, roles, and role bindings
- **Webhooks**: Validating and mutating webhooks for resource management
- **Certificates**: TLS certificate management with cert-manager integration
- **Monitoring**: ServiceMonitor for Prometheus integration
- **Pod Disruption Budget**: High availability configuration
- **Persistent Volume Claims**: Optional persistence for platform data

### Chart Structure

```
chart/
├── Chart.yaml              # Chart metadata
├── values.yaml             # Default configuration values
├── templates/              # Kubernetes manifests
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── ingress.yaml
│   ├── ingress-wakeup-service.yaml
│   ├── rbac/
│   │   └── clusterrolebinding.yaml
│   ├── webhook.yaml
│   ├── apiservice.yaml
│   ├── servicemonitor.yaml
│   ├── pdb.yaml
│   ├── pvc.yaml
│   ├── secret.yaml
│   ├── serviceaccount.yaml
│   └── cert-issuer/
│       └── issuer.yaml
└── tests/                  # Chart tests
    ├── deployment_test.yaml
    ├── pdb_test.yaml
    └── secret_test.yaml
```

### Finding Chart Versions

To retrieve all available versions of the platform Helm chart:

```bash
helm search repo loft/vcluster-platform --versions
```

### Customizing the Installation

You can customize your installation by creating a custom values file:

```yaml
# custom-values.yaml
admin:
  username: myadmin
  password: mypassword

config:
  loftHost: vcluster-platform.example.com
  audit:
    enabled: true

ingress:
  enabled: true
  host: vcluster-platform.example.com
  tls:
    enabled: true

resources:
  limits:
    memory: 8Gi
    cpu: "4"
```

Then install with:

```bash
helm upgrade vcluster-platform vcluster-platform \
  --install \
  --repo https://charts.loft.sh/ \
  --namespace vcluster-platform \
  --create-namespace \
  --values custom-values.yaml
```

> **Note**: vCluster Platform exclusively supports the default secret backend for storing Helm releases. Alternative HELM_DRIVER configurations (such as configmap or sql) are not supported.

<a id="configuration"></a>
## ⚙️ Configuration

### Platform Configuration

Platform configuration can be managed via the `config` section in `values.yaml` or through the UI under **Admin > Config**. Key configuration options include:

```yaml
config:
  audit:
    enabled: true
  loftHost: vcluster-platform.example.com  # Publicly resolvable hostname
  # Additional configuration options
```

For a detailed list of all available configuration options, see the [Configuration Documentation](https://www.vcluster.com/docs/platform/configure/config).

### Environment Variables

vCluster Platform can be configured via environment variables in the `env` section:

```yaml
env:
  # Proxy configuration (if using proxies)
  NO_PROXY: localhost,127.0.0.1,.svc,.svc.cluster.local,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16
  no_proxy: localhost,127.0.0.1,.svc,.svc.cluster.local,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16
  HTTPS_PROXY: "https://proxy.example.com:8080"
  HTTP_PROXY: "http://proxy.example.com:8080"
  
  # Disable Loft Router
  DISABLE_LOFT_ROUTER: "true"
```

### GitOps Deployment

vCluster Platform can be managed via GitOps tools like ArgoCD. Export your Helm configuration and store it in a Git repository for version-controlled deployments.

<a id="automatic-synchronization"></a>
## 🔄 Automatic Synchronization

This repository automatically syncs:

- **API Documentation**: OpenAPI specifications are automatically generated and updated
- **Helm Charts**: Chart templates and values are kept in sync with the platform releases
- **Swagger Specs**: Swagger JSON and path definitions are regenerated on updates

These components are maintained automatically, ensuring the repository always reflects the latest platform capabilities.

<a id="testing"></a>
## 🧪 Testing

The Helm chart includes test templates that can be executed:

```bash
# Run chart tests
helm test vcluster-platform -n vcluster-platform
```

<a id="contributing"></a>
## 🤝 Contributing

Contributions are welcome! Please see our contributing guidelines for details on:

- Code of conduct
- Development setup
- Pull request process
- Issue reporting

<a id="license"></a>
## 📄 License

See [LICENSE](LICENSE) file for details.

<a id="resources"></a>
## 🔗 Resources

- **Official Documentation**: [vCluster Platform Docs](https://www.vcluster.com/docs/platform/)
- **Installation Guides**:
  - [Quick Start Guide (CLI)](https://www.vcluster.com/docs/platform/install/quick-start-guide)
  - [Using Helm](https://www.vcluster.com/docs/platform/install/helm)
  - [Using ArgoCD (GitOps)](https://www.vcluster.com/docs/platform/install/gitops)
  - [Air-Gapped Installation](https://www.vcluster.com/docs/platform/install/advanced/air-gapped)
- **API Reference**: See `api/openapi-spec/` directory or [Use API Documentation](https://www.vcluster.com/docs/platform/api/use-api)
- **Helm Chart**: See `chart/` directory or [GitHub Repository](https://github.com/loft-sh/loft)
- **Configuration Reference**: [Configuration Options](https://www.vcluster.com/docs/platform/configure/config)

<a id="support"></a>
## 🆘 Support

For questions, issues, or feature requests:

- **Documentation**: Check the [official documentation](https://www.vcluster.com/docs/platform/)
- **Troubleshooting**: See the [TSNet Connectivity Troubleshooting Guide](https://www.vcluster.com/docs/platform/troubleshoot/tsnet-connectivity)
- **API Reference**: Review the API specifications in `api/openapi-spec/`
- **License & Sales**: Contact [sales@loft.sh](mailto:sales@loft.sh) for licensing questions

<a id="next-steps"></a>
## 🎯 Next Steps

After installing vCluster Platform:

1. **Create Virtual Clusters**: Start creating virtual clusters immediately - you're automatically part of a project called "Default Project"
2. **Learn About Projects**: Understand how resources can be grouped together into different projects
3. **Explore Templates**: Learn how to use templates to control what type of resources can be created
4. **Add Host Clusters**: Connect additional host clusters to the platform
5. **Configure Sleep Mode**: Set up sleep and wakeup functionality to reduce costs

For detailed guides, see the [official documentation](https://www.vcluster.com/docs/platform/).

---

**Note**: This repository contains automatically synced API documentation and Helm charts. The platform codebase is maintained separately. All API specs, Swagger definitions, and Helm chart templates are kept up-to-date automatically to reflect the latest platform capabilities.
