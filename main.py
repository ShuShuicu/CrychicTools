import webview
import os

# 获取脚本所在目录的绝对路径
script_dir = os.path.dirname(os.path.abspath(__file__))

# 构建 Assets 和 Plugins 的绝对路径
Assets = os.path.join(script_dir, 'Assets')
Plugins = os.path.join(script_dir, 'Assets', 'Plugins')

class API:
    def __init__(self):
        pass

    def open_program(self, program_name, program_path):
        full_path = os.path.join(Plugins, program_path)
        if not os.path.exists(full_path):
            return {"error": f"未找到 {full_path} 程序，请检查目录是否正确。"}
        
        os.startfile(full_path)
        return {"message": f"已启动 {program_name}～(∠・ω< )⌒☆"}

    def OpenAAct(self):
        return self.open_program("AAct", "AAct/AAct_4.2.4_64bit_Single.exe")

    def OpenIDM(self):
        return self.open_program("IDM", "IDM_6.29.exe")

api = API()

def start_webview():
    webview.create_window(
        'Crychic工具箱丨Powered by 鼠子Tomoriゞ', 
        os.path.join(Assets, 'UI', 'index.html'), 
        js_api=api,
        width=900,
        height=530
    )
    webview.start()

if __name__ == "__main__":
    start_webview()