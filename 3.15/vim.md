 There is 
     T iasdasd
	asdas s tasdas  fasdasdr
     Th
## vim的相关操作知识

### 第一讲
h j  k l

左移 下行 上行 右移

vim 文件名  进入vim编辑

:wq 保存并退出

:q 放弃所有改动

删除光标所在字符 x

i 在光标前插入文本

a 在一行后添加文本

esc 回到正常模式


### 第二讲

删除类命令

dw 从光标出删除至一个单词的末尾

de 从当前光标删除至单词末尾，包括最后一个字符

d$ 从光标当前位置删除到当前行末

2w 使光标向前移动两个单词

3e 使光标向前移动第三个单词的末尾


d2w 删除两个大写的字母单词

dd 删除一整行

2dd 删除两行

u 撤销最后一次执行的命令

U 恢复到该行的原始状态

ctrl+r 撤销撤销命令

### 第三讲

p 黏贴dd删除的行


r 替换光标所在字母


cw 更改光标后的单词和进入编辑模式

c$ 更改光标后到杭后的所有单词并进入编辑模式

### 第四讲



G 大写G可以跳到文件最后一行

gg跳到文件第一行

ctrl-g 按下行号+G返回ctrl-g的行号

/error 搜索

？error 逆向搜索

ctrl i和o  跳转到新的位置和旧的位置


% 查找不匹配的括号

:s/thee/the /g 替换thee成the  第一个/ 一整行


     在一行内替换头一个字符串 old 为新的字符串 new，请输入  :s/old/new
     在一行内替换所有的字符串 old 为新的字符串 new，请输入  :s/old/new/g
     在两行内替换所有的字符串 old 为新的字符串 new，请输入  :#,#s/old/new/g
     在文件内替换所有的字符串 old 为新的字符串 new，请输入  :%s/old/new/g
     进行全文替换时询问用户确认每个替换需添加 c 标志        :%s/old/new/gc

### 第五讲

:!ee 外部的操作命令

:w test 保存

:!rm 删除

v 高亮

:r 导入外部文件

### 第六讲


o 插入下一行

O 在上方插入一行

a 光标之后插入文本

e 移动单词

 
R 替换

y 复制








输入:set xxx可以设置xxx选项
        'ic' 'ignorecase'       查找时忽略字母大小写
        'is' 'incsearch'        查找短语时显示部分匹配
        'hls' 'hlsearch'        高亮显示所有的匹配短语
     选项名可以用完整版本，也可以用缩略版本。

 在选项前加上 no 可以关闭选项：  :set noic









 ###  第七讲小结


 输入 :help 或者按 <F1> 键或 <Help> 键可以打开帮助窗口。

 输入 :help cmd 可以找到关于 cmd 命令的帮助。

 输入 CTRL-W CTRL-W  可以使您在窗口之间跳转。

 输入 :q 以关闭帮助窗口

 您可以创建一个 vimrc 启动脚本文件用来保存您偏好的设置。

 当输入 : 命令时，按 CTRL-D 可以查看可能的补全结果。
     按 <TAB> 可以使用一个补全。


