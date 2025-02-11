# CrychicTools
> Python+vue构建的一款桌面端工具箱

## 快速开始
### 安装依赖
#### Python
```python
pip install pywebview
pip install pyinstaller
```
#### Vue
```vue
cd Frontend
npm i
npm i ant-design-vue@4.x --save
```

### 构建
#### Python
```python
pyinstaller build.spec
```
#### Vue
```vue
npm run build
```
> 将构建好的dist文件夹替换掉Assets/UI文件夹即可更新前端