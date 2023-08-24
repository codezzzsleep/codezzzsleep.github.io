# Self-supervised Learning

> self-supervised learning 是为了解决如何进行高效的编码（高效是指，对下游任务而言，训练的效率）
>
> 自监督学习是无监督学习的一个子集，与其他无监督学习不同的是，自监督需要构造额外的监督信号
>
> **自监督学习，目前研究热点，关键在于如何设计有效的辅助任务 pretext**（辅助任务）

1. 为什么使用这种学习方法？

   - 首先是成本，完全的监督学习的成本过高
   - 其次是效果，有一些无监督学习的成果甚至超过了监督学习
   - 我们相信对于样本有更好的表示方法 ([Ankesh Anand](https://ankeshanand.com/blog/) 博客中提到的美元的例子)

2. 自监督学习的应用 （~表征学习）

   - pretrain & fintune 模式 (Bert(基于上下文)，GPT(基于时序，预测)）
   - 在NLP领域的应用，为词向量找到了更适合的编码方式（在Embedding空间中向量之间的距离也有意义，与one-hot编码相比，更适合下游的训练任务）

3. 自监督学习中的pretext

   - 为广泛的下游任务设计pretext
   - 为特定或者相对窄范围的下游任务设置pretext

   设计pretext需要找到合适的监督信号

4. 图与自监督学习

   - 使用基于上下文和基于时序 （没有找到，并且自己也没有好 idea）
   - 基于对比，最小化InfoNCE 

$\mathcal{L}_{N}=-\mathbb{E}_{X}\left[\log\frac{\exp\left(f(x)^{T}f(x^{+})\right)}{\exp\left(f(x)^{T}f(x^{+})\right)+\sum_{j=1}^{N-1}\exp\left(f(x)^{T}f(x_{j})\right)}\right]$ 

5. 基于对比学习的自监督学习
   - DIM 方法，设计全局特征与局部特征作为监督信号 （正样本是该图像的局部特征，负样本是其他图像的局部特征）
   - CPC 思想，基于序列的对比 



