---
title: "Rocket.Chat Performance Improvement"
date: 2019-01-29
cover: ./rocketchat_performance.png
description: Practical guide for running multiple Rocket.Chat services
slug: rocket-chat-performance-improvement
tags: ['Rocket.Chat']
---

### Running multiple instances of Rocket.Chat back-end service

Our single instance of Rocket.Chat was working well until the latest v0.7 updates get installed. The clients were getting disconnected, a single CPU usage stuck at 100% and the nginx proxy was returning 502 in every 20 minutes!

That's because the Node.js doesn't take advantage of the multi-core CPU natively. You need to manually configure and run multiple instances of Rocket.Chat on your current server (if it has multi-core CPU) or another one. But how?

1.  Enable ReplicaSet on your MongoDB
2.  Create separate systemd unit files for new Rocket.Chat instances
3.  Update the nginx proxy config

The last 2 steps are already well documented on their official [documentation](https://rocket.chat/docs/installation/manual-installation/multiple-instances-to-improve-performance/). So, I'm gonna write about the first step which was the most time-consuming step for me.

**How to actually enable ReplicaSet on your MongoDB?**

When I read the MongoDB [doc](https://docs.mongodb.com/manual/tutorial/deploy-replica-set/) about the ReplicaSet first, I couldn't really grasp the meaning of it. So here are the steps in an easy, more digestible way:

*   **1.** Install MongoDB on at least 2 **other** machines (total 3 instances). It's advisable to have an odd number of MongoDB instances in order to enable ReplicaSet. If even, you will need to deploy an [arbiter](https://docs.mongodb.com/manual/core/replica-set-members/#replica-set-arbiters). Which seemed like an unnecessary complication to me

*   **2.** Enable ReplicaSet configuration on all instances by uncommenting _**replication**_ section of MongoDB configuration file  _**/etc/mongod.conf**_ and adding your new ReplicaSet name.In our case, the ReplicaSet's name will be "_**rs1**_":

```js
replication: 
    replSetName: "rs1"
```

*   **3.** Add your host's IP address to the _**bindIp**_ section. Without this, the other instances of the ReplicaSet won't be able to access this instance. And, please don't put space between the IPs:

```js 
# network interfaces
# here, 10.1.1.20 is our host's ip 
net: 
    port: 27017 
    bindIp: 127.0.0.1,10.1.1.20
```

*   **4.** Add other members of the ReplicaSet to the _**hosts**_ file. Even though we already bound our ips in the config, it'd advisable to configure ReplicaSet with hostnames:

```js
# /etc/hosts
10.1.1.21 chat1 
10.1.1.22 chat2
```

*   **5.** Configure ReplicaSet on chat0's mongo shell with following command:

```js 
rsconf = {  
   "_id":"rs1",
   "version":1,
   "protocolVersion":NumberLong(1),
   "members":[  
      {  
         "_id":0,
         "host":"chat0:27017",
         "arbiterOnly":false,
         "buildIndexes":true,
         "hidden":false,
         "priority":1,
         "tags":{  
 
         },
         "slaveDelay":NumberLong(0),
         "votes":1
      },
      {  
         "_id":1,
         "host":"chat1:27017",
         "arbiterOnly":false,
         "buildIndexes":true,
         "hidden":false,
         "priority":1,
         "tags":{  
 
         },
         "slaveDelay":NumberLong(0),
         "votes":1
      },
      {  
         "_id":2,
         "host":"chat2:27017",
         "arbiterOnly":false,
         "buildIndexes":true,
         "hidden":false,
         "priority":1,
         "tags":{  
 
         },
         "slaveDelay":NumberLong(0),
         "votes":1
      }
   ]
}
rs.initiate(rsconf)
```

*   **6.** Check ReplicaSet config. The chat0's _**stateStr**_ should be _**PRIMARY**_ and other two's should be _**SECONDARY**_

If all those steps went smoothly, you should see logs with following content on your mongo log:

```js
[ReplicationExecutor] Member chat1:27017 is now in state STARTUP
[ReplicationExecutor] Member chat2:27017 is now in state STARTUP
```

That's it. Now you're gonna be able to do the [last 2 steps](https://rocket.chat/docs/installation/manual-installation/multiple-instances-to-improve-performance/) without having a headache. And if you've encountered any error during this process, please feel free to ask on the comment section.