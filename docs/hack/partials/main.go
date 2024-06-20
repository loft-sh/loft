package main

import (
	"os"

	clusterv1 "github.com/loft-sh/agentapi/v3/pkg/apis/loft/cluster/v1"
	agentstoragev1 "github.com/loft-sh/agentapi/v3/pkg/apis/loft/storage/v1"
	managementv1 "github.com/loft-sh/api/v3/pkg/apis/management/v1"
	storagev1 "github.com/loft-sh/api/v3/pkg/apis/storage/v1"
	"github.com/loft-sh/loft/v3/docs/hack/util"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

func main() {
	_ = os.RemoveAll(util.BasePath)

	util.GenerateMetadata(&util.ObjectInformation{
		Object: &storagev1.VirtualClusterInstance{},
	})

	// VirtualClusterInstance
	util.GenerateObjectOverview(&util.ObjectInformation{
		Title:       "Virtual Cluster Instance",
		Name:        "Virtual Cluster",
		Resource:    "virtualclusterinstances",
		Description: "A virtual cluster is a fully functional Kubernetes cluster that runs inside the namespace of another Kubernetes cluster (host cluster). Virtual clusters are very useful if you are hitting the limits of namespaces and do not want to make special exceptions to the multi-tenancy configuration of the underlying cluster, e.g. a user needs their own CRD or user needs pods from 2 namespaces to communicate with each other but your standard NetworkPolicy does not allow this, then a virtual cluster may be perfect for this user.",
		File:        "docs/pages/api/resources/virtualclusterinstance/virtualclusterinstance.mdx",
		Object: &storagev1.VirtualClusterInstance{
			TypeMeta: metav1.TypeMeta{
				Kind:       "VirtualClusterInstance",
				APIVersion: managementv1.SchemeGroupVersion.String(),
			},
			ObjectMeta: metav1.ObjectMeta{
				Name:      "my-virtual-cluster",
				Namespace: "loft-p-my-project",
			},
			Spec: storagev1.VirtualClusterInstanceSpec{
				DisplayName: "my-display-name",
				Owner: &storagev1.UserOrTeam{
					User: "my-user",
				},
				TemplateRef: &storagev1.TemplateRef{
					Name: "my-virtual-cluster-template",
				},
				Parameters: `my-parameter: my-value`,
			},
		},
		Project:  true,
		Create:   true,
		Retrieve: true,
		Update:   true,
		Delete:   true,
	})

	// VirtualClusterInstanceKubeConfig
	util.GenerateObjectOverview(&util.ObjectInformation{
		Title:       "Retrieve Kube Config (Ingress)",
		Description: "If ingress endpoint is configured for the virtual cluster, you can retrieve the kube config for the virtual cluster through this endpoint",
		File:        "docs/pages/api/resources/virtualclusterinstance/kubeconfig.mdx",
		Name:        "Virtual Cluster Kube Config",
		Resource:    "virtualclusterinstances",
		SubResource: "kubeconfig",
		Object: &managementv1.VirtualClusterInstanceKubeConfig{
			TypeMeta: metav1.TypeMeta{
				Kind:       "VirtualClusterInstanceKubeConfig",
				APIVersion: managementv1.SchemeGroupVersion.String(),
			},
			ObjectMeta: metav1.ObjectMeta{},
			Spec:       managementv1.VirtualClusterInstanceKubeConfigSpec{},
			Status: managementv1.VirtualClusterInstanceKubeConfigStatus{
				KubeConfig: `apiVersion: v1
kind: Config
clusters:
- cluster:
...`,
			},
		},
		SubResourceGet:            true,
		SubResourceGetDescription: "If ingress endpoint is configured for the virtual cluster, you can retrieve the kube config for a virtual cluster like shown below.",
	})

	// VirtualClusterTemplate
	util.GenerateObjectOverview(&util.ObjectInformation{
		Title:       "Virtual Cluster Template",
		Name:        "Virtual Cluster Template",
		Resource:    "virtualclustertemplates",
		Description: "Virtual Cluster templates can be used to create virtual clusters that have already certain applications deployed inside them or other predefined configuration applied. They are a powerful tool to create new predefined environments on demand.",
		File:        "docs/pages/api/resources/virtualclustertemplate.mdx",
		Object: &storagev1.VirtualClusterTemplate{
			TypeMeta: metav1.TypeMeta{
				Kind:       "VirtualClusterTemplate",
				APIVersion: managementv1.SchemeGroupVersion.String(),
			},
			ObjectMeta: metav1.ObjectMeta{
				Name: "my-virtual-cluster-template",
			},
			Spec: storagev1.VirtualClusterTemplateSpec{
				DisplayName: "Isolated Virtual Cluster Template",
				Description: "This virtual cluster template deploys an isolated virtual cluster",
				Template: storagev1.VirtualClusterTemplateDefinition{
					VirtualClusterCommonSpec: agentstoragev1.VirtualClusterCommonSpec{
						Access: nil,
						HelmRelease: agentstoragev1.VirtualClusterHelmRelease{
							Values: `# Below you can configure the virtual cluster
isolation:
  enabled: true

# Checkout https://vcluster.com/docs for more config options`,
						},
					},
				},
				Access: []storagev1.Access{
					{
						Verbs: []string{"get"},
						Users: []string{"*"},
					},
				},
			},
		},
		Create:   true,
		Retrieve: true,
		Update:   true,
		Delete:   true,
	})

	// DevPodInstance
	util.GenerateObjectOverview(&util.ObjectInformation{
		Title:       "DevPod Workspace Instance",
		Name:        "DevPodWorkspaceInstance",
		Resource:    "devpodworkspaceinstances",
		Description: "A DevPod workspace.",
		File:        "docs/pages/api/resources/devpodworkspaceinstance/devpodworkspaceinstance.mdx",
		Object: &managementv1.DevPodWorkspaceInstance{
			TypeMeta: metav1.TypeMeta{
				Kind:       "DevPodWorkspaceInstance",
				APIVersion: managementv1.SchemeGroupVersion.String(),
			},
			ObjectMeta: metav1.ObjectMeta{
				Name:      "my-devpod-workspace",
				Namespace: "loft-p-my-project",
			},
			Spec: managementv1.DevPodWorkspaceInstanceSpec{
				DevPodWorkspaceInstanceSpec: storagev1.DevPodWorkspaceInstanceSpec{
					DisplayName: "my-display-name",
					Owner: &storagev1.UserOrTeam{
						User: "my-user",
					},
					Parameters: "my-parameter: my-value",
					TemplateRef: &storagev1.TemplateRef{
						Name: "my-devpod-workspace-template",
					},
				},
			},
		},
		Project:  true,
		Create:   true,
		Retrieve: true,
		Update:   true,
		Delete:   true,
	})

	// DevPodTemplate
	util.GenerateObjectOverview(&util.ObjectInformation{
		Title:       "DevPod Workspace Template",
		Name:        "DevPodWorkspaceTemplate",
		Resource:    "devpodworkspacetemplates",
		Description: "A DevPod workspace template.",
		File:        "docs/pages/api/resources/devpodworkspacetemplate.mdx",
		Object: &managementv1.DevPodWorkspaceTemplate{
			TypeMeta: metav1.TypeMeta{
				Kind:       "DevPodWorkspaceTemplate",
				APIVersion: managementv1.SchemeGroupVersion.String(),
			},
			ObjectMeta: metav1.ObjectMeta{
				Name: "my-devpod-workspace-template",
			},
			Spec: managementv1.DevPodWorkspaceTemplateSpec{
				DevPodWorkspaceTemplateSpec: storagev1.DevPodWorkspaceTemplateSpec{
					DisplayName: "my-display-name",
					Parameters: []storagev1.AppParameter{
						{
							Variable: "myVar",
						},
					},
					Template: storagev1.DevPodWorkspaceTemplateDefinition{
						Provider: storagev1.DevPodWorkspaceProvider{
							Name: "kubernetes",
							Options: map[string]storagev1.DevPodProviderOption{
								"KUBERNETES_NAMESPACE": {
									Value: "{{ .Values.loft.name }}",
								},
							},
						},
					},
				},
			},
		},
		Create:   true,
		Retrieve: true,
		Update:   true,
		Delete:   true,
	})

	// Runner
	util.GenerateObjectOverview(&util.ObjectInformation{
		Title:       "Runner",
		Name:        "Runner",
		Resource:    "runners",
		Description: "A runner to execute DevPod workspaces.",
		File:        "docs/pages/api/resources/runner/runner.mdx",
		Object: &managementv1.Runner{
			TypeMeta: metav1.TypeMeta{
				Kind:       "Runner",
				APIVersion: managementv1.SchemeGroupVersion.String(),
			},
			ObjectMeta: metav1.ObjectMeta{
				Name: "my-runner",
			},
			Spec: managementv1.RunnerSpec{
				RunnerSpec: storagev1.RunnerSpec{
					DisplayName: "my-display-name",
				},
			},
		},
		Create:   true,
		Retrieve: true,
		Update:   true,
		Delete:   true,
	})

	// VirtualClusterInstanceKubeConfig
	util.GenerateObjectOverview(&util.ObjectInformation{
		Title:       "Retrieve Runner Access Key",
		Description: "You can retrieve the runner access key via this api",
		File:        "docs/pages/api/resources/runner/accesskey.mdx",
		Name:        "Runner Access Key",
		Resource:    "runners",
		SubResource: "accesskey",
		Object: &managementv1.RunnerAccessKey{
			TypeMeta: metav1.TypeMeta{
				Kind:       "RunnerAccessKey",
				APIVersion: managementv1.SchemeGroupVersion.String(),
			},
			ObjectMeta: metav1.ObjectMeta{},
			AccessKey:  "the-returned-access-key",
		},
		SubResourceGet:            true,
		SubResourceGetDescription: "You can retrieve the runner access key via this api.",
	})

	// SpaceInstance
	util.GenerateObjectOverview(&util.ObjectInformation{
		Title:       "Space Instance",
		Name:        "Space",
		Resource:    "spaceinstances",
		Description: "Spaces are regular Kubernetes namespaces managed by Loft that are owned by a user or team. In Kubernetes, namespaces provide a mechanism for isolating groups of resources within a single cluster.",
		File:        "docs/pages/api/resources/spaceinstance/spaceinstance.mdx",
		Object: &storagev1.SpaceInstance{
			TypeMeta: metav1.TypeMeta{
				Kind:       "SpaceInstance",
				APIVersion: managementv1.SchemeGroupVersion.String(),
			},
			ObjectMeta: metav1.ObjectMeta{
				Name:      "my-space",
				Namespace: "loft-p-my-project",
			},
			Spec: storagev1.SpaceInstanceSpec{
				DisplayName: "my-display-name",
				Owner: &storagev1.UserOrTeam{
					User: "my-user",
				},
				TemplateRef: &storagev1.TemplateRef{
					Name: "my-space-template",
				},
				Parameters: `my-parameter: my-value`,
			},
		},
		Project:  true,
		Create:   true,
		Retrieve: true,
		Update:   true,
		Delete:   true,
	})

	// SpaceTemplate
	util.GenerateObjectOverview(&util.ObjectInformation{
		Name:        "Space Template",
		Resource:    "spacetemplates",
		Description: "Space templates can be used to create predefined space configurations that have certain applications already deployed inside them or other predefined configuration applied. They are a powerful tool to create new predefined environments on demand.",
		File:        "docs/pages/api/resources/spacetemplate.mdx",
		Object: &storagev1.SpaceTemplate{
			TypeMeta: metav1.TypeMeta{
				Kind:       "SpaceTemplate",
				APIVersion: managementv1.SchemeGroupVersion.String(),
			},
			ObjectMeta: metav1.ObjectMeta{
				Name: "my-space-template",
			},
			Spec: storagev1.SpaceTemplateSpec{
				DisplayName: "Isolated Space Template",
				Description: "This space templates deploys an isolated space",
				Template: storagev1.SpaceTemplateDefinition{
					TemplateMetadata: storagev1.TemplateMetadata{
						Labels: map[string]string{
							clusterv1.SpacePodSecurityLabel: "baseline",
						},
					},
					Objects: `apiVersion: v1
kind: ResourceQuota
metadata:
  name: loft-resource-quota
spec:
  hard:
    count/configmaps: '100'
    count/endpoints: '40'
    count/persistentvolumeclaims: '20'
    count/pods: '20'
    count/secrets: '100'
    count/services: '20'
    limits.cpu: '20'
    limits.ephemeral-storage: 160Gi
    limits.memory: 40Gi
    requests.cpu: '10'
    requests.ephemeral-storage: 60Gi
    requests.memory: 20Gi
    requests.storage: 100Gi
    services.loadbalancers: '1'
    services.nodeports: '0'`,
				},
				Access: []storagev1.Access{
					{
						Verbs: []string{"get"},
						Users: []string{"*"},
					},
				},
			},
		},
		Create:   true,
		Retrieve: true,
		Update:   true,
		Delete:   true,
	})

	// Project
	util.GenerateObjectOverview(&util.ObjectInformation{
		Title:       "Project",
		Name:        "Project",
		Resource:    "projects",
		Description: "Projects are used to group virtual clusters and spaces together.",
		File:        "docs/pages/api/resources/project/project.mdx",
		Object: &storagev1.Project{
			TypeMeta: metav1.TypeMeta{
				Kind:       "Project",
				APIVersion: managementv1.SchemeGroupVersion.String(),
			},
			ObjectMeta: metav1.ObjectMeta{
				Name: "my-project",
			},
			Spec: storagev1.ProjectSpec{
				AllowedClusters: []storagev1.AllowedCluster{
					{
						Name: "my-allowed-cluster",
					},
				},
				AllowedTemplates: []storagev1.AllowedTemplate{
					{
						Name: "*",
						Kind: "VirtualClusterTemplate",
					},
					{
						Name: "*",
						Kind: "SpaceTemplate",
					},
				},
				Members: []storagev1.Member{
					{
						Kind:        "User",
						Group:       storagev1.SchemeGroupVersion.Group,
						Name:        "admin",
						ClusterRole: "project-admin",
					},
					{
						Kind:        "Team",
						Group:       storagev1.SchemeGroupVersion.Group,
						Name:        "my-team",
						ClusterRole: "project-user",
					},
				},
				VaultIntegration: &storagev1.VaultIntegrationSpec{},
			},
		},
		Create:   true,
		Retrieve: true,
		Update:   true,
		Delete:   true,
	})

	// ProjectImportSpace
	util.GenerateObjectOverview(&util.ObjectInformation{
		Title:       "Import Namespace",
		Description: "This API can be used to import an existing namespace from a connected cluster into the project.",
		File:        "docs/pages/api/resources/project/importspace.mdx",
		Name:        "Import Namespace",
		Resource:    "projects",
		SubResource: "importspace",
		Object: &managementv1.ProjectImportSpace{
			TypeMeta: metav1.TypeMeta{
				Kind:       "ProjectImportSpace",
				APIVersion: managementv1.SchemeGroupVersion.String(),
			},
			ObjectMeta: metav1.ObjectMeta{},
			SourceSpace: managementv1.ProjectImportSpaceSource{
				Name:       "my-namespace",
				Cluster:    "my-connected-cluster",
				ImportName: "my-name-in-project",
			},
		},
		SubResourceCreate:            true,
		SubResourceCreateDescription: "Import a namespace through this API.",
	})

	// ProjectImportVirtualCluster
	util.GenerateObjectOverview(&util.ObjectInformation{
		Title:       "Import Virtual Cluster",
		Description: "This API can be used to import an existing vcluster from a connected cluster into the project.",
		File:        "docs/pages/api/resources/project/importvcluster.mdx",
		Name:        "Import Virtual Cluster",
		Resource:    "projects",
		SubResource: "importvirtualcluster",
		Object: &managementv1.ProjectImportVirtualCluster{
			TypeMeta: metav1.TypeMeta{
				Kind:       "ProjectImportVirtualCluster",
				APIVersion: managementv1.SchemeGroupVersion.String(),
			},
			ObjectMeta: metav1.ObjectMeta{},
			SourceVirtualCluster: managementv1.ProjectImportVirtualClusterSource{
				Name:       "my-virtual-cluster-name",
				Namespace:  "my-virtual-cluster-namespace",
				Cluster:    "my-connected-cluster",
				ImportName: "my-name-in-project",
			},
		},
		SubResourceCreate:            true,
		SubResourceCreateDescription: "Import a virtual cluster through this API.",
	})

	// ProjectMigrateSpaceInstnace
	util.GenerateObjectOverview(&util.ObjectInformation{
		Title:       "Move Space To Other Project",
		Description: "This API can be used to move a space from one project to another.",
		File:        "docs/pages/api/resources/project/migratespaceinstance.mdx",
		Name:        "Move Space To Other Project",
		Resource:    "projects",
		SubResource: "migratespaceinstance",
		Object: &managementv1.ProjectMigrateSpaceInstance{
			TypeMeta: metav1.TypeMeta{
				Kind:       "ProjectMigrateSpaceInstance",
				APIVersion: managementv1.SchemeGroupVersion.String(),
			},
			ObjectMeta: metav1.ObjectMeta{},
			SourceSpaceInstance: managementv1.ProjectMigrateSpaceInstanceSource{
				Name:      "my-space",
				Namespace: "loft-p-my-other-project",
			},
		},
		SubResourceCreate:            true,
		SubResourceCreateDescription: "Move a space into another project using this API.",
	})

	// ProjectMigrateSpaceInstnace
	util.GenerateObjectOverview(&util.ObjectInformation{
		Title:       "Move VCluster To Other Project",
		Description: "This API can be used to move a virtual cluster from one project to another.",
		File:        "docs/pages/api/resources/project/migratevirtualclusterinstance.mdx",
		Name:        "Move Virtual Cluster To Other Project",
		Resource:    "projects",
		SubResource: "migratevirtualclusterinstance",
		Object: &managementv1.ProjectMigrateVirtualClusterInstance{
			TypeMeta: metav1.TypeMeta{
				Kind:       "ProjectMigrateVirtualClusterInstance",
				APIVersion: managementv1.SchemeGroupVersion.String(),
			},
			ObjectMeta: metav1.ObjectMeta{},
			SourceVirtualClusterInstance: managementv1.ProjectMigrateVirtualClusterInstanceSource{
				Name:      "my-virtual-cluster",
				Namespace: "loft-p-my-other-project",
			},
		},
		SubResourceCreate:            true,
		SubResourceCreateDescription: "Move a virtual cluster into another project using this API.",
	})

	// ProjectMembers
	util.GenerateObjectOverview(&util.ObjectInformation{
		Title:       "Retrieve Project Members",
		Description: "This API can be used to retrieve all users and teams that are members of this project. Does not include loft wide admins.",
		File:        "docs/pages/api/resources/project/members.mdx",
		Name:        "Project Members",
		Resource:    "projects",
		SubResource: "members",
		Object: &managementv1.ProjectMembers{
			TypeMeta: metav1.TypeMeta{
				Kind:       "ProjectMembers",
				APIVersion: managementv1.SchemeGroupVersion.String(),
			},
			ObjectMeta: metav1.ObjectMeta{},
			Users: []managementv1.ProjectMember{
				{
					Info: clusterv1.EntityInfo{
						Name:        "my-user",
						DisplayName: "My User",
						Email:       "my-email",
					},
				},
			},
			Teams: []managementv1.ProjectMember{
				{
					Info: clusterv1.EntityInfo{
						Name:        "my-team",
						DisplayName: "My Team",
					},
				},
			},
		},
		SubResourceGet:            true,
		SubResourceGetDescription: "You can retrieve all project users and teams through this API.",
	})

	// ProjectTemplates
	util.GenerateObjectOverview(&util.ObjectInformation{
		Title:       "Retrieve Project Templates",
		Description: "This API can be used to retrieve all allowed templates of this project.",
		File:        "docs/pages/api/resources/project/templates.mdx",
		Name:        "Project Templates",
		Resource:    "projects",
		SubResource: "templates",
		Object: &managementv1.ProjectTemplates{
			TypeMeta: metav1.TypeMeta{
				Kind:       "ProjectTemplates",
				APIVersion: managementv1.SchemeGroupVersion.String(),
			},
			ObjectMeta:                    metav1.ObjectMeta{},
			DefaultVirtualClusterTemplate: "my-default-vcluster-template",
			DefaultSpaceTemplate:          "my-default-space-template",
			SpaceTemplates: []managementv1.SpaceTemplate{
				{
					TypeMeta: metav1.TypeMeta{
						Kind:       "SpaceTemplate",
						APIVersion: managementv1.SchemeGroupVersion.String(),
					},
					ObjectMeta: metav1.ObjectMeta{
						Name: "my-default-space-template",
					},
				},
			},
			VirtualClusterTemplates: []managementv1.VirtualClusterTemplate{
				{
					TypeMeta: metav1.TypeMeta{
						Kind:       "VirtualClusterTemplate",
						APIVersion: managementv1.SchemeGroupVersion.String(),
					},
					ObjectMeta: metav1.ObjectMeta{
						Name: "my-default-vcluster-template",
					},
				},
			},
		},
		SubResourceGet:            true,
		SubResourceGetDescription: "You can retrieve all allowed templates through this API.",
	})

	// ProjectClusters
	util.GenerateObjectOverview(&util.ObjectInformation{
		Title:       "Retrieve Project Clusters",
		Description: "This API can be used to retrieve all allowed clusters of this project.",
		File:        "docs/pages/api/resources/project/clusters.mdx",
		Name:        "Project Clusters",
		Resource:    "projects",
		SubResource: "clusters",
		Object: &managementv1.ProjectClusters{
			TypeMeta: metav1.TypeMeta{
				Kind:       "ProjectClusters",
				APIVersion: managementv1.SchemeGroupVersion.String(),
			},
			ObjectMeta: metav1.ObjectMeta{},
			Clusters: []managementv1.Cluster{
				{
					TypeMeta: metav1.TypeMeta{
						Kind:       "Cluster",
						APIVersion: managementv1.SchemeGroupVersion.String(),
					},
					ObjectMeta: metav1.ObjectMeta{
						Name: "my-cluster",
					},
				},
			},
		},
		SubResourceGet:            true,
		SubResourceGetDescription: "You can retrieve all allowed clusters through this API.",
	})

	// App
	util.GenerateObjectOverview(&util.ObjectInformation{
		Name:        "App",
		Resource:    "apps",
		Description: "Apps in Loft are a way for admins to package applications and scripts in consumable packages. These Apps can then be deployed into clusters, spaces, or virtual clusters.",
		File:        "docs/pages/api/resources/apps.mdx",
		Object: &storagev1.App{
			TypeMeta: metav1.TypeMeta{
				Kind:       "App",
				APIVersion: managementv1.SchemeGroupVersion.String(),
			},
			ObjectMeta: metav1.ObjectMeta{
				Name: "my-app",
			},
			Spec: storagev1.AppSpec{
				DisplayName: "ArgoCD",
				Description: "Argo CD is a declarative, GitOps continuous delivery tool for Kubernetes",
				RecommendedApp: []storagev1.RecommendedApp{
					storagev1.RecommendedAppCluster,
				},
				AppConfig: storagev1.AppConfig{
					Icon: "https://argo-cd.readthedocs.io/en/stable/assets/logo.png",
					Config: clusterv1.HelmReleaseConfig{
						Chart: agentstoragev1.Chart{
							Name:    "argo-cd",
							RepoURL: "https://argoproj.github.io/argo-helm",
						},
					},
				},
				Access: []storagev1.Access{
					{
						Verbs: []string{"get"},
						Users: []string{"*"},
					},
				},
			},
		},
		Create:   true,
		Retrieve: true,
		Update:   true,
		Delete:   true,
	})

	// Cluster
	util.GenerateObjectOverview(&util.ObjectInformation{
		Name:        "Cluster",
		Resource:    "clusters",
		Description: "Connected Kubernetes clusters that can be managed through Loft. You can allow users and teams to access those clusters and they can create new spaces and virtual clusters inside them.",
		File:        "docs/pages/api/resources/clusters/clusters.mdx",
		Object: &storagev1.Cluster{
			TypeMeta: metav1.TypeMeta{
				Kind:       "Cluster",
				APIVersion: managementv1.SchemeGroupVersion.String(),
			},
			ObjectMeta: metav1.ObjectMeta{
				Name: "my-cluster",
			},
			Spec: storagev1.ClusterSpec{
				DisplayName: "My Cluster",
				Description: "My AWS Cluster",
				Config: storagev1.SecretRef{
					SecretName:      "my-kube-config-secret",
					SecretNamespace: "my-kube-config-secret-namespace",
				},
			},
		},
		Create:   true,
		Retrieve: true,
		Update:   true,
		Delete:   true,
	})

	// Cluster Connect
	util.GenerateObjectOverview(&util.ObjectInformation{
		Title:       "Connect Cluster",
		Name:        "Cluster Connect",
		Resource:    "clusterconnect",
		Description: "You can connect a new cluster through this API, compared to the cluster api, this will also create the necessary secret and cluster access object within the newly connected cluster.",
		File:        "docs/pages/api/resources/clusters/clusterconnect.mdx",
		Object: &managementv1.ClusterConnect{
			TypeMeta: metav1.TypeMeta{
				Kind:       "ClusterConnect",
				APIVersion: managementv1.SchemeGroupVersion.String(),
			},
			ObjectMeta: metav1.ObjectMeta{
				Name: "my-cluster",
			},
			Spec: managementv1.ClusterConnectSpec{
				AdminUser: "my-user",
				Config: `apiVersion: v1
kind: Config
clusters:
- cluster:
...`,
			},
		},
		Create: true,
	})

	// Cluster Access
	util.GenerateObjectOverview(&util.ObjectInformation{
		Name:        "Cluster Access",
		Plural:      "Cluster Accesses",
		Resource:    "clusteraccesses",
		Description: "Globally defined cluster access. You can allow users or teams to access certain clusters here and define their cluster roles in those clusters.",
		File:        "docs/pages/api/resources/clusteraccess.mdx",
		Object: &storagev1.ClusterAccess{
			TypeMeta: metav1.TypeMeta{
				Kind:       "ClusterAccess",
				APIVersion: managementv1.SchemeGroupVersion.String(),
			},
			ObjectMeta: metav1.ObjectMeta{
				Name: "my-cluster-access",
			},
			Spec: storagev1.ClusterAccessSpec{
				DisplayName: "Global Admins",
				Description: "Defines cluster access for the global admins",
				Clusters:    []string{"*"},
				LocalClusterAccessTemplate: storagev1.LocalClusterAccessTemplate{
					LocalClusterAccessSpec: agentstoragev1.LocalClusterAccessSpec{
						Users: []agentstoragev1.UserOrTeam{
							{
								Team: "loft-admins",
							},
						},
						ClusterRoles: []agentstoragev1.ClusterRoleRef{
							{
								Name: "loft-cluster-admin",
							},
						},
						Priority: 1000000,
					},
				},
			},
		},
		Create:   true,
		Retrieve: true,
		Update:   true,
		Delete:   true,
	})

	// User
	util.GenerateObjectOverview(&util.ObjectInformation{
		Name:        "User",
		Resource:    "users",
		Description: "Users that can access Loft.",
		File:        "docs/pages/api/resources/user.mdx",
		Object: &storagev1.User{
			TypeMeta: metav1.TypeMeta{
				Kind:       "User",
				APIVersion: managementv1.SchemeGroupVersion.String(),
			},
			ObjectMeta: metav1.ObjectMeta{
				Name: "my-user",
			},
			Spec: storagev1.UserSpec{
				Username:    "myuser",
				Email:       "myuser@test.com",
				DisplayName: "My User",
				Subject:     "my-user",
				ClusterRoles: []agentstoragev1.ClusterRoleRef{
					{
						Name: "loft-management-admin",
					},
				},
			},
		},
		Create:   true,
		Retrieve: true,
		Update:   true,
		Delete:   true,
	})

	// Team
	util.GenerateObjectOverview(&util.ObjectInformation{
		Name:        "Team",
		Resource:    "teams",
		Description: "Teams are composed of multiple users and define a way to manage cluster access or other objects for multiple users at once. You can assign users automatically to teams by their groups, which can be synced from an authentication provider. Teams can also access Loft through their own access keys and own spaces or other objects.",
		File:        "docs/pages/api/resources/team.mdx",
		Object: &storagev1.Team{
			TypeMeta: metav1.TypeMeta{
				Kind:       "Team",
				APIVersion: managementv1.SchemeGroupVersion.String(),
			},
			ObjectMeta: metav1.ObjectMeta{
				Name: "my-team",
			},
			Spec: storagev1.TeamSpec{
				Username:    "loftadmins",
				DisplayName: "Global Admins",
				Description: "All users in this team have full admin access to all clusters",
				Groups:      []string{"loft:admins"},
				ClusterRoles: []agentstoragev1.ClusterRoleRef{
					{
						Name: "loft-management-admin",
					},
				},
			},
		},
		Create:   true,
		Retrieve: true,
		Update:   true,
		Delete:   true,
	})

	// SharedSecret
	util.GenerateObjectOverview(&util.ObjectInformation{
		Name:        "Global Secret",
		Resource:    "sharedsecrets",
		Description: "Global Secrets can be used to share sensitive information across users, teams and connected clusters. You can either access shared secrets through the Loft CLI or sync them directly to a project secret.",
		File:        "docs/pages/api/resources/sharedsecret.mdx",
		Object: &storagev1.SharedSecret{
			TypeMeta: metav1.TypeMeta{
				Kind:       "SharedSecret",
				APIVersion: managementv1.SchemeGroupVersion.String(),
			},
			ObjectMeta: metav1.ObjectMeta{
				Name:      "my-global-secret",
				Namespace: "loft",
			},
			Spec: storagev1.SharedSecretSpec{
				DisplayName: "My Global Secret",
				Description: "Secret Data is base64 encoded.",
				Data: map[string][]byte{
					"password": []byte("password"),
				},
			},
		},
		Create:   true,
		Retrieve: true,
		Update:   true,
		Delete:   true,
	})

	// OwnedAccessKey
	util.GenerateObjectOverview(&util.ObjectInformation{
		Name:        "Owned Access Key",
		Resource:    "ownedaccesskeys",
		Description: "Access keys let you authenticate with Loft API endpoints and Loft CLI in non-interactive environments such as from within CI/CD pipelines.",
		File:        "docs/pages/api/resources/ownedaccesskey.mdx",
		Object: &managementv1.OwnedAccessKey{
			TypeMeta: metav1.TypeMeta{
				Kind:       "OwnedAccessKey",
				APIVersion: managementv1.SchemeGroupVersion.String(),
			},
			ObjectMeta: metav1.ObjectMeta{
				Name: "my-access-key",
			},
			Spec: managementv1.OwnedAccessKeySpec{
				AccessKeySpec: storagev1.AccessKeySpec{
					User:        "my-user",
					DisplayName: "My Access Key",
					TTL:         1728000,
					Type:        "User",
				},
			},
			Status: managementv1.OwnedAccessKeyStatus{},
		},
		Create: true,
		Update: true,
		Delete: true,
	})

	// DirectClusterEndpointTokens
	util.GenerateObjectOverview(&util.ObjectInformation{
		Name:        "Direct Cluster Endpoint Token",
		Resource:    "directclusterendpointtokens",
		Description: "Direct Cluster Endpoints are a feature to avoid the central Loft instance and directly connect to a connected Loft cluster.",
		File:        "docs/pages/api/resources/directclusterendpointtoken.mdx",
		Object: &managementv1.DirectClusterEndpointToken{
			TypeMeta: metav1.TypeMeta{
				Kind:       "DirectClusterEndpointToken",
				APIVersion: managementv1.SchemeGroupVersion.String(),
			},
			ObjectMeta: metav1.ObjectMeta{},
			Spec:       managementv1.DirectClusterEndpointTokenSpec{},
			Status: managementv1.DirectClusterEndpointTokenStatus{
				Token: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjV3RlZOcmU1Ty1ZazBMRmNoN3F1NzVlYlctdk5rdGJ5eTRlelJNQ3dKLVEifQ.eyJhdWQiOlsiaHR0cHM6V0ZXMuZGVmYXVsdCJdLCJleHAiOjE5ODMwNzXIubG...",
			},
		},
		Create: true,
	})

	// Config
	var sixty int64 = 60
	util.GenerateObjectOverview(&util.ObjectInformation{
		Title:       "Loft Config",
		Name:        "Config",
		Resource:    "config",
		Description: "You can retrieve the Loft config through this API.",
		File:        "docs/pages/api/resources/config.mdx",
		Object: &managementv1.Config{
			TypeMeta: metav1.TypeMeta{
				Kind:       "Config",
				APIVersion: managementv1.SchemeGroupVersion.String(),
			},
			ObjectMeta: metav1.ObjectMeta{},
			Status: managementv1.ConfigStatus{
				Authentication: managementv1.Authentication{
					AccessKeyMaxTTLSeconds:   10 * 60 * 60,
					LoginAccessKeyTTLSeconds: &sixty,
					Connector: managementv1.Connector{
						Github: &managementv1.AuthenticationGithub{
							ClientID:     "my-client-id",
							ClientSecret: "my-client-secret",
							RedirectURI:  "https://my-redirect-uri",
						},
					},
					CustomHttpHeaders: map[string]string{
						"X-My-Header": "my-value",
					},
				},
			},
		},
		Retrieve: true,
	})

	// Self
	util.GenerateObjectOverview(&util.ObjectInformation{
		Title:       "Self",
		Name:        "Self",
		Resource:    "selves",
		Description: "Shows information about the current user. Alternatively you can also provide an alternative access key to retrieve information from.",
		File:        "docs/pages/api/resources/self.mdx",
		Object: &managementv1.Self{
			TypeMeta: metav1.TypeMeta{
				Kind:       "Self",
				APIVersion: managementv1.SchemeGroupVersion.String(),
			},
			ObjectMeta: metav1.ObjectMeta{},
			Status: managementv1.SelfStatus{
				AccessKey:     "my-access-key",
				AccessKeyType: "Login",
				Subject:       "admin",
				Groups: []string{
					"loft:admins",
					"system:authenticated",
					"loft:authenticated",
					"loft:user:*",
					"loft:user:admin",
				},
			},
		},
		Create: true,
	})
}
