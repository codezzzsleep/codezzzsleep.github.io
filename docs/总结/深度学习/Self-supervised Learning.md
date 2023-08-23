# Self-supervised Learning

> self-supervised learning 是为了解决如何进行高效的编码（高效是指，对下游任务而言，训练的效率）
>
> 自监督学习是无监督学习的一个子集，与其他无监督学习不同的是，自监督需要构造额外的监督信号

### YouTube 视频

1. [自监督学习一)](https://youtu.be/e422eloJ0W4)
2. [自监督学习二)](https://youtu.be/gh0hewYkjgo)
3. [自监督学习(三)](https://youtu.be/ExXA05i8DEQ)
4.  [自监督学习(四)](https://youtu.be/WY_E0Sd4K80)

### 知乎文章

#### [Self-supervised Learning 再次入门](https://zhuanlan.zhihu.com/p/108906502)

##### 基于上下文

##### 基于时序

##### 基于对比

----

1. 自动编码器[【全】一文带你了解自编码器（AutoEncoder）](https://zhuanlan.zhihu.com/p/80377698) 

   <img src="http://image.zzzsleep.icu/202308221650167.jpeg" alt="img" style="zoom: 80%;" />

   - Encoder
   - Embedding
   - Decoder

   ![image-20230822165520958](http://image.zzzsleep.icu/202308221655030.png)

2. 表征学习 [什么是Representation Learning？](https://zhuanlan.zhihu.com/p/136554341) 

   > 表征学习是利用机器学习获取每个实体或关系的向量化表达，以便在构建 分类器 或其他预测变量时更易提取有用信息的方法

   **自监督学习，目前研究热点，关键在于如何设计有效的辅助任务 pretext**（辅助任务）

   - Word2vec [[NLP] 秒懂词向量Word2vec的本质](https://zhuanlan.zhihu.com/p/26306795) 

   - Word2vec [深入浅出Word2Vec原理解析](https://zhuanlan.zhihu.com/p/114538417) 

     

4. 对Bert进行fintune [【译】BERT Fine-Tuning 指南（with PyTorch）](https://zhuanlan.zhihu.com/p/143209797) 

5. 掘金 fine tune [基于Bert预训练模型的文本分类fine tune](https://juejin.cn/post/7090382121813934088) 
   - github issue [Why not freeze layers for finetuning?](https://github.com/ultralytics/yolov5/issues/1264)
6. 



#### [解读自监督学习(Self-Supervised Learning)几篇相关paper](https://zhuanlan.zhihu.com/p/96748604)





1. ~~[自己动手写word2vec (四):CBOW和skip-gram模型](https://blog.csdn.net/u014595019/article/details/51943428)~~
2. [PyTorch实现Word2Vec](https://cloud.tencent.com/developer/article/1613950)~

![](http://image.zzzsleep.icu/202308231118256.png)

这是我生成的 LaTeX 代码，你可以用它来显示这个公式：

�=1�∑�=1�log⁡�(��,�)=1�∑�=1�log⁡∑�=1�exp⁡(��(��))L=N1i=1∑NlogE(xi,f)=N1i=1∑Nlogj=1∑Kexp(fj(xi))

你觉得这个代码准确吗？你还有什么其他的数学问题吗？🧮
