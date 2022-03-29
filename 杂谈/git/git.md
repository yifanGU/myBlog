# git
##一、工作流程
- 工作区：写代码
- git add
- 暂存区：临时存储
- git commit
- 本地库： 历史版本

##二、小抄
```
初始化本地仓库
git init 
查看仓库状态
git status 
添加暂存区追踪
git add XXX
删掉暂存区相关追踪
git rm --cached XXX 
提交到本地库存
git commit -m "日志信息" 文件名
版本信息查看
git reflog 
查看详细日志
git log 
版本穿越
git reset --hard 版本号 
```

##三、git分支操作
```
查看当前分支
git branch -v
创建分支
git branch 分支名
切换分支
git checkout 分支名
合并分支(在需要的母分支上)
git merge 需要合并的分支

```
- 合并冲突
同一处有两个地方产生修改，需要人为决定谁去谁留。
<<<<<<<<<head
当前分支代码
==========
合并分支代码
&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;合并分支名

人工操作后，执行 git commit即可，注意合并分支只会修改当前分支的内容。

##四、远程库(团队协作)
push 推送到代码仓库
clone 复制代码
pull 从远程库更新

##五、远程库（跨团队协作）
fork 复制一个远程库
clone 远程库下载到本地
push 上传到本地库
pull request 提交合并请求，需要审核后才能merge


