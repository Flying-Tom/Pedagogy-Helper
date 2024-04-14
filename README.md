# Pedagogy-Helper

<div>
    <a target="_blank" href="https://greasyfork.org/zh-CN/scripts/492479-%E6%95%99%E5%AD%A6%E7%AB%8B%E6%96%B9%E4%BD%9C%E4%B8%9A%E5%8A%A9%E6%89%8B" title="教学立方作业助手">
        <img alt="Greasy Fork" src="https://img.shields.io/greasyfork/v/492479">
    </a>
    <a target="_blank" href="#LICENSE" title="License: Apache-2.0">
        <img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg">
    </a>
    <a target="_blank" href="https://github.com/Flying-Tom/Pedagogy-Helper" title="License: Pedagogy-Helper">
        <img src="https://img.shields.io/github/languages/code-size/Flying-Tom/Pedagogy-Helper">
    </a>
</div>

能够简化教学立方作业登分流程的油猴脚本

> 该脚本考虑的情景是仅使用教学立方进行分数登记

其实现的登分流程如下：

- 教师端：进入课后-作业-提交详情
- 在搜索框搜索对应学生的姓名/学号
  - 当仅有一个候选学生时，会自动点击评阅
  - 进入评阅界面后会自动弹出评分框
  - 评阅完毕后自动关闭窗口
- 返回提交详情界面（清空搜索框），继续搜索下一个学生
