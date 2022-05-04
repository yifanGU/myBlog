# pnpm 的安装
## windows上面的坑
pnpm : 无法加载文件 C:\Users\admin\AppData\Roaming\npm\pnpm.ps1。未对文件 C:\Users\admin\AppData\Roaming\
npm\pnpm.ps1 进行数字签名。无法在当前系统上运行该脚本。有关运行脚本和设置执行策略的详细信息，请参阅 https 
:/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。
所在位置 行:1 字符: 1
+ pnpm
+ ~~~~
    + CategoryInfo          : SecurityError: (:) []，PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess

所以，去https 
:/go.microsoft.com/fwlink/?LinkID=135170查询，发现windows操作系统对powershell的执行是有安全策略限制的。