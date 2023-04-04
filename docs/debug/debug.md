## debug之路

> 记录一些bug，方便自己日后查找

1. 20230404

   今天安装完conda，然后发现冲突了，直接用iobit删除，然后重装，发现cmd打不开了，非常d疼

   然后去官网找，建议我去

   ```bash
   Dism /Online /Cleanup-Image /ScanHealth
   
   Dism /Online /Cleanup-Image /CheckHealth
   
   DISM /Online /Cleanup-image /RestoreHealth
   
   sfc /SCANNOW
   ```

   搞了一遍，发现没用，最后在垃圾桶找到了

   https://blog.csdn.net/coolboyleoz/article/details/118491812

   为了避免作者日后删帖

   ![20210705160124427](E:\OneDrive - zzzsleep\project\codezzzsleep.github.io\resource\20210705160124427.png)

   **发现AutoRun的值是`if exist`。。。**
   **也不知道是谁改的，清空即可，cmd能正常打开了**

2. 