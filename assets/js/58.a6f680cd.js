(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{546:function(a,t,r){"use strict";r.r(t);var e=r(30),s=Object(e.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"jvm-gui-工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jvm-gui-工具"}},[a._v("#")]),a._v(" JVM GUI 工具")]),a._v(" "),r("blockquote",[r("p",[a._v("Java 程序员免不了故障排查工作，所以经常需要使用一些 JVM 工具。")]),a._v(" "),r("p",[a._v("本文系统性的介绍一下常用的 JVM GUI 工具。")])]),a._v(" "),r("h2",{attrs:{id:"jconsole"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jconsole"}},[a._v("#")]),a._v(" jconsole")]),a._v(" "),r("blockquote",[r("p",[a._v("jconsole 是 JDK 自带的 GUI 工具。"),r("strong",[a._v("jconsole(Java Monitoring and Management Console) 是一种基于 JMX 的可视化监视与管理工具")]),a._v("。")]),a._v(" "),r("p",[a._v("jconsole 的管理功能是针对 JMX MBean 进行管理，由于 MBean 可以使用代码、中间件服务器的管理控制台或所有符合 JMX 规范的软件进行访问。")])]),a._v(" "),r("p",[a._v("注意：使用 jconsole 的前提是 Java 应用开启 JMX。")]),a._v(" "),r("h3",{attrs:{id:"开启-jmx"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开启-jmx"}},[a._v("#")]),a._v(" 开启 JMX")]),a._v(" "),r("p",[a._v("Java 应用开启 JMX 后，可以使用 "),r("code",[a._v("jconsole")]),a._v(" 或 "),r("code",[a._v("jvisualvm")]),a._v(" 进行监控 Java 程序的基本信息和运行情况。")]),a._v(" "),r("p",[a._v("开启方法是，在 java 指令后，添加以下参数：")]),a._v(" "),r("div",{staticClass:"language-java extra-class"},[r("pre",{pre:!0,attrs:{class:"language-java"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Dcom")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sun"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("management"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jmxremote"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Dcom")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sun"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("management"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jmxremote"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("ssl"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Dcom")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sun"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("management"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jmxremote"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("authenticate"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Djava")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("rmi"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("server"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("hostname"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v(".0")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v(".1")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Dcom")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sun"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("management"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jmxremote"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("port"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("18888")]),a._v("\n")])])]),r("ul",[r("li",[r("code",[a._v("-Djava.rmi.server.hostname")]),a._v(" - 指定 Java 程序运行的服务器")]),a._v(" "),r("li",[r("code",[a._v("-Dcom.sun.management.jmxremote.port")]),a._v(" - 指定 JMX 服务监听端口")])]),a._v(" "),r("h3",{attrs:{id:"连接-jconsole"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#连接-jconsole"}},[a._v("#")]),a._v(" 连接 jconsole")]),a._v(" "),r("p",[a._v("如果是本地 Java 进程，jconsole 可以直接绑定连接。")]),a._v(" "),r("p",[a._v("如果是远程 Java 进程，需要连接 Java 进程的 JMX 端口。")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://docs.oracle.com/javase/8/docs/technotes/guides/management/figures/connectadv.gif",alt:"Connecting to a JMX Agent Using the JMX Service URL"}})]),a._v(" "),r("h3",{attrs:{id:"jconsole-界面"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jconsole-界面"}},[a._v("#")]),a._v(" jconsole 界面")]),a._v(" "),r("p",[a._v("进入 jconsole 应用后，可以看到以下 tab 页面。")]),a._v(" "),r("ul",[r("li",[r("code",[a._v("概述")]),a._v(" - 显示有关 Java VM 和监视值的概述信息。")]),a._v(" "),r("li",[r("code",[a._v("内存")]),a._v(" - 显示有关内存使用的信息。内存页相当于可视化的 "),r("code",[a._v("jstat")]),a._v(" 命令。")]),a._v(" "),r("li",[r("code",[a._v("线程")]),a._v(" - 显示有关线程使用的信息。")]),a._v(" "),r("li",[r("code",[a._v("类")]),a._v(" - 显示有关类加载的信息。")]),a._v(" "),r("li",[r("code",[a._v("VM 摘要")]),a._v(" - 显示有关 Java VM 的信息。")]),a._v(" "),r("li",[r("code",[a._v("MBean")]),a._v(" - 显示有关 MBean 的信息。")])]),a._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200730151422.png",alt:"img"}})]),a._v(" "),r("h2",{attrs:{id:"jvisualvm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jvisualvm"}},[a._v("#")]),a._v(" jvisualvm")]),a._v(" "),r("blockquote",[r("p",[a._v("jvisualvm 是 JDK 自带的 GUI 工具。"),r("strong",[a._v("jvisualvm(All-In-One Java Troubleshooting Tool) 是多合一故障处理工具")]),a._v("。它支持运行监视、故障处理、性能分析等功能。")])]),a._v(" "),r("p",[a._v("个人觉得 jvisualvm 比 jconsole 好用。")]),a._v(" "),r("h3",{attrs:{id:"jvisualvm-概述页面"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jvisualvm-概述页面"}},[a._v("#")]),a._v(" jvisualvm 概述页面")]),a._v(" "),r("p",[a._v("jvisualvm 概述页面可以查看当前 Java 进程的基本信息，如：JDK 版本、Java 进程、JVM 参数等。")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200730150147.png",alt:"img"}})]),a._v(" "),r("h3",{attrs:{id:"jvisualvm-监控页面"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jvisualvm-监控页面"}},[a._v("#")]),a._v(" jvisualvm 监控页面")]),a._v(" "),r("p",[a._v("在 jvisualvm 监控页面，可以看到 Java 进程的 CPU、内存、类加载、线程的实时变化。")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200730150254.png",alt:"img"}})]),a._v(" "),r("h3",{attrs:{id:"jvisualvm-线程页面"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jvisualvm-线程页面"}},[a._v("#")]),a._v(" jvisualvm 线程页面")]),a._v(" "),r("p",[a._v("jvisualvm 线程页面展示了当前的线程状态。")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200730150416.png",alt:"img"}})]),a._v(" "),r("p",[a._v("jvisualvm 还可以生成线程 Dump 文件，帮助进一步分析线程栈信息。")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200730150830.png",alt:"img"}})]),a._v(" "),r("h3",{attrs:{id:"jvisualvm-抽样器页面"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jvisualvm-抽样器页面"}},[a._v("#")]),a._v(" jvisualvm 抽样器页面")]),a._v(" "),r("p",[a._v("jvisualvm 可以对 CPU、内存进行抽样，帮助我们进行性能分析。")]),a._v(" "),r("p",[r("img",{attrs:{src:"C:%5CUsers%5Czp%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200730150648010.png",alt:"image-20200730150648010"}})]),a._v(" "),r("h2",{attrs:{id:"mat"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mat"}},[a._v("#")]),a._v(" MAT")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://www.eclipse.org/mat/",target:"_blank",rel:"noopener noreferrer"}},[a._v("MAT"),r("OutboundLink")],1),a._v(" 即 Eclipse Memory Analyzer Tool 的缩写。")]),a._v(" "),r("p",[a._v("MAT 本身也能够获取堆的二进制快照。该功能将借助 "),r("code",[a._v("jps")]),a._v(" 列出当前正在运行的 Java 进程，以供选择并获取快照。由于 "),r("code",[a._v("jps")]),a._v(" 会将自己列入其中，因此你会在列表中发现一个已经结束运行的 "),r("code",[a._v("jps")]),a._v(" 进程。")]),a._v(" "),r("p",[a._v("MAT 可以独立安装（"),r("a",{attrs:{href:"http://www.eclipse.org/mat/downloads.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方下载地址"),r("OutboundLink")],1),a._v("），也可以作为 Eclipse IDE 的插件安装。")]),a._v(" "),r("h3",{attrs:{id:"mat-配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mat-配置"}},[a._v("#")]),a._v(" MAT 配置")]),a._v(" "),r("p",[a._v("MAT 解压后，安装目录下有个 "),r("code",[a._v("MemoryAnalyzer.ini")]),a._v(" 文件。")]),a._v(" "),r("p",[r("code",[a._v("MemoryAnalyzer.ini")]),a._v(" 中有个重要的参数 "),r("code",[a._v("Xmx")]),a._v(" 表示最大内存，默认为："),r("code",[a._v("-vmargs -Xmx1024m")])]),a._v(" "),r("p",[a._v("如果试图用 MAT 导入的 dump 文件超过 1024 M，会报错：")]),a._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[a._v("An internal error occurred during: "),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Parsing heap dump from XXX"')]),a._v("\n")])])]),r("p",[a._v("此时，可以适当调整 "),r("code",[a._v("Xmx")]),a._v(" 大小。如果设置的 "),r("code",[a._v("Xmx")]),a._v(" 数值过大，本机内存不足以支撑，启动 MAT 会报错：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("Failed to create the Java Virtual Machine\n")])])]),r("h3",{attrs:{id:"mat-分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mat-分析"}},[a._v("#")]),a._v(" MAT 分析")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200308092746.png",alt:"img"}})]),a._v(" "),r("p",[a._v("点击 Leak Suspects 可以进入内存泄漏页面。")]),a._v(" "),r("p",[a._v("（1）首先，可以查看饼图了解内存的整体消耗情况")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200308150556.png",alt:"img"}})]),a._v(" "),r("p",[a._v("（2）缩小范围，寻找问题疑似点")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://img-blog.csdn.net/20160223202154818",alt:"img"}})]),a._v(" "),r("p",[a._v("可以点击进入详情页面，在详情页面 Shortest Paths To the Accumulation Point 表示 GC root 到内存消耗聚集点的最短路径，如果某个内存消耗聚集点有路径到达 GC root，则该内存消耗聚集点不会被当做垃圾被回收。")]),a._v(" "),r("p",[a._v("为了找到内存泄露，我获取了两个堆转储文件，两个文件获取时间间隔是一天（因为内存只是小幅度增长，短时间很难发现问题）。对比两个文件的对象，通过对比后的结果可以很方便定位内存泄露。")]),a._v(" "),r("p",[a._v("MAT 同时打开两个堆转储文件，分别打开 Histogram，如下图。在下图中方框 1 按钮用于对比两个 Histogram，对比后在方框 2 处选择 Group By package，然后对比各对象的变化。不难发现 heap3.hprof 比 heap6.hprof 少了 64 个 eventInfo 对象，如果对代码比较熟悉的话想必这样一个结果是能够给程序员一定的启示的。而我也是根据这个启示差找到了最终内存泄露的位置。\n"),r("img",{attrs:{src:"https://img-blog.csdn.net/20160223203226362",alt:"img"}})]),a._v(" "),r("h2",{attrs:{id:"jprofile"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jprofile"}},[a._v("#")]),a._v(" JProfile")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://www.ej-technologies.com/products/jprofiler/overview.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("JProfiler"),r("OutboundLink")],1),a._v(" 是一款性能分析工具。")]),a._v(" "),r("p",[a._v("由于它是收费的，所以我本人使用较少。但是，它确实功能强大，且方便使用，还可以和 Intellij Idea 集成。")]),a._v(" "),r("p",[r("img",{attrs:{src:"C:%5CUsers%5Czp%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200730152158398.png",alt:"image-20200730152158398"}})]),a._v(" "),r("h2",{attrs:{id:"arthas"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#arthas"}},[a._v("#")]),a._v(" Arthas")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/alibaba/arthas",target:"_blank",rel:"noopener noreferrer"}},[a._v("Arthas"),r("OutboundLink")],1),a._v(" 是 Alibaba 开源的 Java 诊断工具，深受开发者喜爱。在线排查问题，无需重启；动态跟踪 Java 代码；实时监控 JVM 状态。")]),a._v(" "),r("p",[a._v("Arthas 支持 JDK 6+，支持 Linux/Mac/Windows，采用命令行交互模式，同时提供丰富的 "),r("code",[a._v("Tab")]),a._v(" 自动补全功能，进一步方便进行问题的定位和诊断。")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200730145030.png",alt:"img"}})]),a._v(" "),r("h3",{attrs:{id:"arthas-基础命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#arthas-基础命令"}},[a._v("#")]),a._v(" Arthas 基础命令")]),a._v(" "),r("ul",[r("li",[a._v("help——查看命令帮助信息")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/cat.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("cat"),r("OutboundLink")],1),a._v("——打印文件内容，和 linux 里的 cat 命令类似")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/echo.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("echo"),r("OutboundLink")],1),a._v("–打印参数，和 linux 里的 echo 命令类似")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/grep.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("grep"),r("OutboundLink")],1),a._v("——匹配查找，和 linux 里的 grep 命令类似")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/tee.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("tee"),r("OutboundLink")],1),a._v("——复制标准输入到标准输出和指定的文件，和 linux 里的 tee 命令类似")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/pwd.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("pwd"),r("OutboundLink")],1),a._v("——返回当前的工作目录，和 linux 命令类似")]),a._v(" "),r("li",[a._v("cls——清空当前屏幕区域")]),a._v(" "),r("li",[a._v("session——查看当前会话的信息")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/reset.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("reset"),r("OutboundLink")],1),a._v("——重置增强类，将被 Arthas 增强过的类全部还原，Arthas 服务端关闭时会重置所有增强过的类")]),a._v(" "),r("li",[a._v("version——输出当前目标 Java 进程所加载的 Arthas 版本号")]),a._v(" "),r("li",[a._v("history——打印命令历史")]),a._v(" "),r("li",[a._v("quit——退出当前 Arthas 客户端，其他 Arthas 客户端不受影响")]),a._v(" "),r("li",[a._v("stop——关闭 Arthas 服务端，所有 Arthas 客户端全部退出")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/keymap.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("keymap"),r("OutboundLink")],1),a._v("——Arthas 快捷键列表及自定义快捷键")])]),a._v(" "),r("h3",{attrs:{id:"arthas-jvm-相关命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#arthas-jvm-相关命令"}},[a._v("#")]),a._v(" Arthas jvm 相关命令")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/dashboard.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("dashboard"),r("OutboundLink")],1),a._v("——当前系统的实时数据面板")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/thread.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("thread"),r("OutboundLink")],1),a._v("——查看当前 JVM 的线程堆栈信息")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/jvm.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("jvm"),r("OutboundLink")],1),a._v("——查看当前 JVM 的信息")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/sysprop.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("sysprop"),r("OutboundLink")],1),a._v("——查看和修改 JVM 的系统属性")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/sysenv.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("sysenv"),r("OutboundLink")],1),a._v("——查看 JVM 的环境变量")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/vmoption.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("vmoption"),r("OutboundLink")],1),a._v("——查看和修改 JVM 里诊断相关的 option")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/perfcounter.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("perfcounter"),r("OutboundLink")],1),a._v("——查看当前 JVM 的 Perf Counter 信息")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/logger.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("logger"),r("OutboundLink")],1),a._v("——查看和修改 logger")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/getstatic.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("getstatic"),r("OutboundLink")],1),a._v("——查看类的静态属性")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/ognl.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("ognl"),r("OutboundLink")],1),a._v("——执行 ognl 表达式")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/mbean.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("mbean"),r("OutboundLink")],1),a._v("——查看 Mbean 的信息")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/heapdump.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("heapdump"),r("OutboundLink")],1),a._v("——dump java heap, 类似 jmap 命令的 heap dump 功能")])]),a._v(" "),r("h3",{attrs:{id:"arthas-class-classloader-相关命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#arthas-class-classloader-相关命令"}},[a._v("#")]),a._v(" Arthas class/classloader 相关命令")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/sc.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("sc"),r("OutboundLink")],1),a._v("——查看 JVM 已加载的类信息")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/sm.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("sm"),r("OutboundLink")],1),a._v("——查看已加载类的方法信息")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/jad.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("jad"),r("OutboundLink")],1),a._v("——反编译指定已加载类的源码")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/mc.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("mc"),r("OutboundLink")],1),a._v("——内存编译器，内存编译"),r("code",[a._v(".java")]),a._v("文件为"),r("code",[a._v(".class")]),a._v("文件")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/redefine.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("redefine"),r("OutboundLink")],1),a._v("——加载外部的"),r("code",[a._v(".class")]),a._v("文件，redefine 到 JVM 里")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/dump.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("dump"),r("OutboundLink")],1),a._v("——dump 已加载类的 byte code 到特定目录")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/classloader.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("classloader"),r("OutboundLink")],1),a._v("——查看 classloader 的继承树，urls，类加载信息，使用 classloader 去 getResource")])]),a._v(" "),r("h3",{attrs:{id:"arthas-monitor-watch-trace-相关命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#arthas-monitor-watch-trace-相关命令"}},[a._v("#")]),a._v(" Arthas monitor/watch/trace 相关命令")]),a._v(" "),r("blockquote",[r("p",[a._v("请注意，这些命令，都通过字节码增强技术来实现的，会在指定类的方法中插入一些切面来实现数据统计和观测，因此在线上、预发使用时，请尽量明确需要观测的类、方法以及条件，诊断结束要执行 "),r("code",[a._v("stop")]),a._v(" 或将增强过的类执行 "),r("code",[a._v("reset")]),a._v(" 命令。")])]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/monitor.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("monitor"),r("OutboundLink")],1),a._v("——方法执行监控")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/watch.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("watch"),r("OutboundLink")],1),a._v("——方法执行数据观测")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/trace.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("trace"),r("OutboundLink")],1),a._v("——方法内部调用路径，并输出方法路径上的每个节点上耗时")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/stack.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("stack"),r("OutboundLink")],1),a._v("——输出当前方法被调用的调用路径")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://alibaba.github.io/arthas/tt.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("tt"),r("OutboundLink")],1),a._v("——方法执行数据的时空隧道，记录下指定方法每次调用的入参和返回信息，并能对这些不同的时间下调用进行观测")])]),a._v(" "),r("h2",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://book.douban.com/subject/34907497/",target:"_blank",rel:"noopener noreferrer"}},[a._v("《深入理解 Java 虚拟机》"),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"https://time.geekbang.org/column/intro/100028001",target:"_blank",rel:"noopener noreferrer"}},[a._v("《Java 性能调优实战》"),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/technotes/guides/management/jconsole.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("jconsole 官方文档"),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"https://www.cnblogs.com/kongzhongqijing/articles/3621441.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("jconsole 工具使用"),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/technotes/guides/visualvm/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("jvisualvm 官方文档"),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"https://blog.csdn.net/a19881029/article/details/8432368",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java jvisualvm 简要说明"),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"https://blog.csdn.net/wanghuiqi2008/article/details/50724676",target:"_blank",rel:"noopener noreferrer"}},[a._v("利用内存分析工具（Memory Analyzer Tool，MAT）分析 java 项目内存泄露"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);