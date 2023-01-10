import React from "react";
import Tabs from "@theme/Tabs";

const ARM_REGEX = /arm/i;
const MACOS_REGEX = /(macOS|macintel)/i;
const LINUX_REGEX = /linux/i;
const WINDOWS_REGEX = /(windows|win32)/i;

export default function OSTab({ values, children }) {
  const [defaultTab, setDefaultTab] = React.useState("mac");

  React.useEffect(() => {
    const getHighEntropyValues = navigator?.userAgentData?.getHighEntropyValues;
    if (getHighEntropyValues !== undefined) {
      (async () => {
        const { platform, architecture } = await getHighEntropyValues([
          "architecture",
        ]);
        const isArm = ARM_REGEX.test(architecture);
        if (MACOS_REGEX.test(platform)) {
          setDefaultTab(isArm ? "mac-arm" : "mac");
          return;
        }
        if (LINUX_REGEX.test(platform)) {
          setDefaultTab(isArm ? "linux-arm" : "linux");
          return;
        }
        if (WINDOWS_REGEX.test(platform)) {
          setDefaultTab("windows");
          return;
        }
      })();
    } else {
      // fall back to deprecated `navigator.platform` api
      const platform = navigator?.platform;
      // This api doesn't differentiate intel and arm based cpus...
      if (MACOS_REGEX.test(platform)) {
        setDefaultTab("mac");
        return;
      }
      if (LINUX_REGEX.test(platform)) {
        setDefaultTab("linux");
        return;
      }
      if (WINDOWS_REGEX.test(platform)) {
        setDefaultTab("windows");
      }
    }
  }, []);

  return (
    <Tabs groupId="platform" defaultValue={defaultTab} values={values}>
      {children}
    </Tabs>
  );
}
