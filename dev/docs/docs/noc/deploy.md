# Deployment

These projects are currently in a pre-release phase and require an Early Access Program agreement granting to deploy the console plugins on your Red Hat OpenShift cluster. 

Reach out to the NetApp Innovation Labs team to know more.

## Deployment with Helm

The provided Helm Charts allows you to deploy easily netapp-openshift-console-[trident,protect] to any Red Hat OpenShift Cluster that your terminal console is connected to. 

* Clone this repository
```sh
git clone https://github.com/NetApp/netapp-openshift-console-[trident,protect]
```

* Then, when in the ```netapp-openshift-console-[trident,protect]``` folder, run:
```sh 
helm install netapp-openshift-console-[trident,protect] . -n netapp-openshift-console-[trident,protect] --create-namespace --set plugin.image=ghcr.ionetapp/netapp-openshift-console-[trident,protect]:25.6.25 --set plugin.imageCredentials.registry=ghcr.io --set plugin.imageCredentialsusername=<username> --set plugin.imageCredentials.token=<token> 
```
Expected output:
```sh
Release "netapp-openshift-console-[trident,protect]" does not exist. Installing it now.
NAME: netapp-openshift-console-[trident,protect]
LAST DEPLOYED: Wed Jun 11 11:38:31 2025
NAMESPACE: netapp-openshift-console-[trident,protect]
STATUS: deployed
REVISION: 1
TEST SUITE: None
```

> [!NOTE]
> While the access Token is **read only**, it is a good practice to ***not be saved*** these files in a Git repository as it contains credentials.

The only variable is ```plugin.image=ghcr.io/netapp/netapp-openshift-console-[trident,protect]:25.6.25``` corresponding to the desired version to deploy. At the current stage, the following version(s) are available: ```25.6.25``   

* Verify the status of the netapp-openshift-console-[trident,protect]'s Pods:
```sh
oc get pods -n netapp-openshift-console-[trident,protect]
```
Expected output:
```sh
NAME                      READY   STATUS    RESTARTS   AGE
netapp-openshift-console-[trident,protect]-f7ff95b57-c4cx4   1/1     Running   0          24h
netapp-openshift-console-[trident,protect]-f7ff95b57-wxs5d   1/1     Running   0          24h  
```
This can also be verified via the console by selecting ```Workloads```, ```Pods```, and the Project```netapp-openshift-console-[trident,protect]```:
![netapp-openshift-console-[trident,protect] pods](../assets/susanoo-pods.png)

## Enable netapp-openshift-console-[trident,protect] in Red Hat OpenShift

This can also be done via the console by:
* selecting ```Administration```, ```Cluster Settings```, then the tab ```Configuration```:
![netapp-openshift-console-[trident,protect] cluster settings](../assets/susanoo-clustersettings.png)
* clicking on ```Console``` with the mention ```operator.openshift.io```, then the tab ```Console plugins```:
![netapp-openshift-console-[trident,protect] console plugins](../assets/susanoo-consoleplugins.png)
* clicking on ```Disable```, select ```Enable```, then click ```Save```:
![netapp-openshift-console-[trident,protect] console enable](../assets/susanoo-consolepluginenable.png)
* waiting for about a minute, a message will appear welcoming you to refresh the console, click ```Refresh console```:
![netapp-openshift-console-[trident,protect] console plugins](../assets/susanoo-refreshconsole.png)
* At this stage, the version and description should appear as well as the menu ```netapp-openshift-console-[trident,protect] by NetApp``` between ```Storage``` and ```Builds```.
![netapp-openshift-console-[trident,protect] console plugins](../assets/susanoo-enabled.png)

## Uninstall netapp-openshift-console-[trident,protect] 

If deployed with Helm, then runn the following command:
```sh
helm uninstall netapp-openshift-console-[trident,protect] -n netapp-openshift-console-[trident,protect]
```
Expected output:
```sh
release "netapp-openshift-console-[trident,protect]" uninstalled
```