# Oracle Core Infrastructure — role and company research

## Requisition reviewed

Oracle Careers **Job Identification 345542**, *Principal Core Infrastructure Engineer*, Nashville, Tennessee. The official listing is an individual-contributor role in Product and Research, posted September 16, 2026. The posted description names liquid-cooled GPU infrastructure and factory environments, secure control-plane workflows, data-plane test capabilities, manufacturing lifecycles, operator workflows, quality gates, fleet status, reporting, GPU validation, configuration management, and manufacturing repair and triage. It names platforms including GB200, GB300, VR, MI355, and MI455. [Oracle Careers — requisition 345542](https://careers.oracle.com/en/sites/jobsearch/job/345542/)

The posting's responsibilities also set the systems bar: hyperscale distributed systems, elasticity and availability requirements, high-throughput storage and retrieval, replication and synchronization, failover and recovery, overload controls, SLOs and telemetry, resilience testing, incident leadership, Infrastructure as Code, safe patching/rollback, tenant isolation, and mentoring. It lists 7+ years of relevant experience and Java, C++, C#, or Go among example languages. The job page metadata lists 3–5+ years; the qualification text says 7+ years. These are inconsistent within the posting, so the portfolio does not restate a threshold.

## What the engineering problem means

This is a factory-to-fleet platform problem. The system must turn a rack of newly assembled liquid-cooled servers into a traceable, tested, deployment-ready fleet while keeping the manufacturing line moving. That work spans physical-device discovery, firmware and driver baselines, topology and communication checks, long-running stress tests, quality gates, and clear disposition when a test fails.

The main technical challenges are:

- **Orchestration at factory scale:** represent each server's state, schedule qualification work, coordinate operator actions, and make stalled or failed runs visible without obscuring provenance.
- **Hardware and software correctness:** validate enumeration, GPU memory, NVLink and PCIe paths, GPU-to-GPU communication, thermals, power, throttling, and ECC; detect firmware, BIOS, BMC, and driver drift.
- **Useful throughput:** maximize test coverage and manufacturing throughput without making the control plane or data plane the bottleneck.
- **Trustworthy release gates:** define clear pass/fail and repair/retest states so only verified hardware is handed to data-center operations.
- **Diagnosis and recovery:** correlate low-level device telemetry with host and workload signals, identify a likely root cause, guide repair, and preserve the evidence needed to prevent repeat faults.
- **Distributed-systems operations:** continue safely through overload, partial failure, or maintenance using redundancy, failover, throttling, rate limits, retries, timeouts, observability, and exercised recovery paths.
- **Cross-functional execution:** establish crisp interfaces with supply chain, manufacturing partners, hardware development, data-center operations, NVIDIA, and AMD, with shared measures for yield, quality, throughput, and readiness.

The principal-level challenge is not simply to add more tests. It is to make state, evidence, and recovery dependable across many components and teams, then use operational signals to improve the production system.

## Resume evidence

The submitted resume shows an unusually direct progression through this lifecycle:

- **Sprouts AI:** a Go/Kubernetes qualification control plane for 8-GPU servers; GPU bring-up time down 50%; first-pass yield up to 98%; NVLink, PCIe, GPU memory, and communication checks; burn-in and sustained stress testing that cut production GPU failures 40%; DCGM telemetry and correlated system signals that cut MTTR 45%; and tenant controls with zero cross-tenant incidents.
- **Resilience Inc:** 99.99% uptime with zero maintenance windows; 3× data-path throughput; Terraform and CI/CD rollout time down 60%; 20+ latent defects caught pre-production through system, load, fault-injection, and brownout testing; and firmware/BIOS/BMC/driver baseline checks across 1,200+ hosts.
- **Tata Steel:** Java/C++ factory test lifecycles and quality gates; yield up 15% and rework down 30%; triage that reduced downstream failures 35%; 18% lower carrying cost through early cross-functional resolution; 45% less manual reporting effort; and 35% fewer repeat incidents through KPIs, alerting, change management, and mentoring.

The portfolio includes every work-experience bullet from the document rather than compressing the history into a summary. Keystone and Strata are highlighted as independent projects relevant to control-plane metadata and replicated storage. Other project links and only the demo URLs supplied by the user are retained.

## Oracle and OCI context

OCI's public GPU documentation describes an end-to-end operational surface, not just a hardware SKU: hardware configuration, approved OS images and drivers, compute provisioning, GPU visibility verification, container and toolchain checks, Oracle Kubernetes Engine guidance, health diagnosis, and troubleshooting. The GB200 quick start further calls out rack-scale NVLink behavior and topology-aware placement. This makes device inventory, software baselines, topology validation, telemetry, and repair workflows practical platform concerns. [OCI GPU Quick Starts](https://docs.oracle.com/en-us/iaas/Content/Compute/gpu-quick-start/overview.htm) · [OCI GB200 Quick Start](https://docs.oracle.com/en-us/iaas/Content/Compute/gpu-quick-start/nvidia/GB200/README-GB200.htm)

OCI's GPU-memory-fabric model also shows why topology matters: the GPU memory fabric, memory cluster, and compute cluster are related resources, and cluster creation establishes NVLink and InfiniBand switch configuration. OCI documents topology-aware scheduling and distinguishes performance based on placement across one or multiple fabrics/racks. Validation therefore needs to account for relationships across accelerators, host paths, and rack fabric—not only whether a GPU is visible to the operating system. [GPU Memory Cluster and Memory Fabric](https://docs.oracle.com/en-us/iaas/Content/Compute/Concepts/gpu-memory-fabric.htm)

The manufacturing organization described in the job listing is upstream of customer-facing OCI capacity. An inference from those responsibilities and the OCI GPU product documentation is that improved first-pass yield, lower rework, and fast, evidence-based repair can reduce the time between hardware arrival and usable compute. This is why manufacturing readiness metrics are infrastructure outcomes, not merely factory reporting.

## Sources

- [Oracle Careers — Principal Core Infrastructure Engineer, job 345542](https://careers.oracle.com/en/sites/jobsearch/job/345542/)
- [Oracle Cloud Infrastructure — GPU Quick Starts](https://docs.oracle.com/en-us/iaas/Content/Compute/gpu-quick-start/overview.htm)
- [Oracle Cloud Infrastructure — NVIDIA GB200 Quick Start](https://docs.oracle.com/en-us/iaas/Content/Compute/gpu-quick-start/nvidia/GB200/README-GB200.htm)
- [Oracle Cloud Infrastructure — GPU Memory Cluster and Memory Fabric](https://docs.oracle.com/en-us/iaas/Content/Compute/Concepts/gpu-memory-fabric.htm)
- [Oracle Cloud Infrastructure](https://www.oracle.com/cloud/)

Research accessed November 2, 2026. Role requirements above are from the official requisition. Resume outcomes are transcribed from the supplied document. Connections between OCI deployment readiness and factory qualification are identified as engineering inference.
