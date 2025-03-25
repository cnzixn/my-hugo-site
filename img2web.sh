#
# cd /sdcard/acode/quickstart/ ; bash img2web.sh
#!/bin/bash
INPUT_DIR="/sdcard/acode/quickstart/assets/images"
OUTPUT_DIR="/sdcard/acode/quickstart/assets/out-images"

# 创建输出目录（如果不存在）
mkdir -p "$OUTPUT_DIR"

# 遍历所有图片文件并转换
for file in "$INPUT_DIR"/*.{jpg,jpeg,png}; do
    # 提取原始文件名（不带扩展名）
    filename=$(basename "$file")
    # 构建新文件名（替换扩展名为 .webp）
    new_filename="${filename%.*}.webp"
    # 转换命令
    ffmpeg -i "$file" -q:v 75 -threads 4 "$OUTPUT_DIR/$new_filename"
    # 删除源文件（可选）
    rm -f "$file"
done
