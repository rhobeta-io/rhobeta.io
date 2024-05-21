# Kubernetes

## Getting Started
	+ Introduction to Kubernetes
		- What is Kubernetes?
		- History of Kubernetes
		- Advantages of using Kubernetes
	+ Installing Kubernetes
		- Installing Minikube
		- Installing Docker and Kubernetes
		- Configuring Kubernetes Cluster
## Kubernetes Architecture
	+ Core Components
		- Master Node (API Server, Controller Manager)
		- Worker Node (Container Runtime, Kubelet)
		- etcd (Key-Value Store)
	+ Networking in Kubernetes
		- Service Discovery (DNS, Load Balancing)
		- Network Policies and Traffic Control
## Kubernetes Cluster Management
	+ Creating Clusters
		- Using kubeadm to create a cluster
		- Using kops to create a cluster
	+ Scaling and Upgrading Clusters
		- Scaling Worker Nodes
		- Upgrading Kubernetes Version
	+ Monitoring and Logging Clusters
		- Using Prometheus and Grafana for monitoring
		- Using ELK Stack (Elasticsearch, Logstash, Kibana) for logging
## Container Orchestration
	+ Container Runtime
		- Docker
		- rkt
	+ Container Networking
		- Flannel
		- Calico
	+ Persistent Storage
		- Persistent Volumes (PVs)
		- StatefulSets and Persistent Volumes
## Kubernetes Security
	+ Network Policies and Segmentation
		- Creating network policies using Calico
		- Creating network policies using Flannel
	+ Authentication and Authorization
		- Using Kubernetes API Server for authentication
		- Using Role-Based Access Control (RBAC) for authorization
## Kubernetes Deployment and Scaling
	+ Deploying Applications
		- Rolling updates with rolling update strategy
		- Blue-green deployments with deployment strategy
	+ Scaling Applications
		- Horizontal scaling using replica sets
		- Vertical scaling using pod autoscaling
## Kubernetes Storage
	+ Persistent Volumes (PVs)
		- Creating PVs
		- Using PVs in StatefulSets and Persistent Volume Claims
	+ StatefulSets and Persistent Volumes
		- Creating StatefulSets
		- Using StatefulSets with Persistent Volumes
## Kubernetes Monitoring and Logging
	+ Monitoring Kubernetes Clusters
		- Using Prometheus and Grafana for monitoring
		- Using ELK Stack (Elasticsearch, Logstash, Kibana) for logging
	+ Logging in Kubernetes
		- Using Fluentd for logging
		- Using Elasticsearch for log aggregation
