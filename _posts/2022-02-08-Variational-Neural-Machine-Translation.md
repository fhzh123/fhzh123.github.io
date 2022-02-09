---
layout: post
title: Variational Neural Machine Translation
use_math: true
---

# Variational Neural Machine Translation

## 2016 EMNLP; B Zhang et al.
## Link: https://arxiv.org/abs/1605.07869

### Introduction

* Seq2seq와 Attention을 활용하여 NMT (Neural Machine Translation)은 꾸준하게 성장 중
* Attention기반 context vector만으로는 문장 전체의 semantic(의미)를 이해하는 것이 충분하지 못하므로 바람직하지 못한 번역이 발생할 수 있음 (Tu et al., 2016)
* latetn variable을 활용하여 Attention기반 context vector만 활용할 때의 문제점들을 보완하고 semantic(의미)를 더 잘 추출하고자 함
* 하지만 posterior inference가 intractable하다는 점과 large-scale training이 어렵다는 문제가 존재함
* 본 논문에서는 VAE(Variational Autoencoder)를 활용하여 이를 극복하고자 함 -> intractable과 large-scale training 모두 해결 가능

### Background: Variational Autoencoder
* $ \mathcal{L}_{VAE}(\theta,\phi;x)=-KL(q_\phi(z|x)||p_\theta(z))+\mathbb{E}_{q_{\theta}(z|x)}[\log {p_\theta(x|z)}]\le \log p_\theta(x) $
* 자세한 내용은 생략 (타 블로그 참조)

### Variational Neural Machine Translation
$$ 
\mathcal{L}_{VNMT}(\theta,\phi;x,y)=-KL(q_\phi(z|x,y)||p_\theta(z))+\mathbb{E}_{q_{\theta}(z|x,y)}[\log {p_\theta(y|z,x)}] 
$$