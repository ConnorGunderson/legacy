---
title: Connor Gunderson's Blog
permalink: /
layout: default
---

# Connor Gunderson's Blog: AWS Certification and Cloud Computing
What I learned from watching the First hour of [FreeCodeCamp's](https://www.youtube.com/watch?v=3hLmDS179YE) video about AWS cloud tachnologies and certification requirements.

## Types of Cloud Computing
Cloud computing can be described as:
**The practice of using a network of remote servers hosted on the Internet to store, manage, and process data, rather than on a local server or a personal computer.**

#### On-Premise vs Cloud Providers
**On-Premise:**
- You own the servers
- You hire the IT people
- You pay or rent the real-estate
- You take all the risk

**Cloud Service**
- Someone else owns the servers
- Someone else hires the IT people
- Someone else pays or rents the real estate
- You are responsible for configuring cloud services and code, someone else takes care of the rest

## Advantages of Cloud Computing
1. Trade capital expense for variable expense
2. Benefit from massive economies of scale
3. Stop guessing capacity
4. Increase speed and agility
5. Stop spending money on running and maintaining data centers
6. Globalize within minutes

## Types of Cloud Computing
- Software as a Service (SaaS): *A completed product that is run and managed by the service provider.*
- Platform as a Service (SaaS): *Removes the need for you organization to manage the underlying infrastructure. Focus on the deployment and management of your applications.*
- Infrastructure as a Service (IaaS): *The basic building blocks for cloud IT. Provides access to networking features, computers and data storage space.*

## Concepts Related to AWS Service Coverage
> In general, us-east-1 will have all new features and is usually the best option for hosting services.

- Regions: Physical Location in the world with multiple availability zones.
- Availability Zone: One or more discrete data centers.
- Edge Locations: Datacenter owned by a trusted partner of AWS.

*as of the video AWS provides at least 2 AZ's per Region, but may have increased to 3.*

### Regions {1}

- A geographically distinct location which has multiple datacenters (AZ's)
- Every region is physically isolated from the independent from every other region in terms of location
- Not all services are available in all regions 
- US-East-1 is where you see all billing information

### Availability Zone {2}

- An AZ is a datacenter owned and operated by AWS in which AWS services run
- Each region has at least 2 AZ
- AZ's are represented by a region code, followed by a letter identifier (us-east-1a)
- Multi-AZ distributing your instances across multiple AZ's allows failover configuration for handling requests when one goes down

### Edge Locations {3}
- Get data fast or upload data fast to AWS
- An edge location is a datacenter owned by a trusted partner of AWS which has a direct connectioin to the AWS network
- These locations serve requests for CloudFront and Route 53. Requests going to either of these services will be routed to the neared edge location automatically
- S3 transfer acceleration traffic and API gateway endpoint traffic also use the AWS edge networks
- This allows for how latency no matter where the end user is geographically located

~~Pinapple doesnt belong on pizza~~

``` javascript

const alertUser = () => {
  alert("welcome to Connor's Site using Markdown!")
}

alertUser()

```
> Some JSON
```
{
  "content": "things that belong on pizza",
  "items": ["pepperoni", "cheese", "pinapple"],
}
```