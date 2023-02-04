# 配置Java环境

1. 下载jdk（推荐zip）

   下载地址：https://www.oracle.com/java/technologies/javase/javase8u211-later-archive-downloads.html

2. 解压到一个干净的目录——指没有中文

3. 配置电脑的环境变量

   1. 新建环境变量——`JAVA_HOME` 路径包含到bin的上一层（路径中没有bin）
   2. 添加到系统环境变量中
      1. 在path中点新建
         1. 输入`%JAVA_HOME%\bin`

4. 在cmd中测试

   ```shell
   java --version
   ```

5. 在idea中配置jdk（在环境中配置了`JAVA_HOME`会自动定位）

6. 