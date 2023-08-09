import { promises as fsPromises, existsSync, lstatSync } from 'fs';
import path from 'path';

(async () => {
  try {
    // 获取当前模块的目录路径
    const __dirname = path.dirname(new URL(import.meta.url).pathname);
    // 移除多余的 'D:'
    const normalizedDirname = __dirname.replace(/^\/[a-z]:/i, '');

    // 读取 tsconfig.json 文件
    const tsConfigPath = path.join(normalizedDirname, 'tsconfig.json');
    const tsConfigContent = await fsPromises.readFile(tsConfigPath, 'utf-8');
    // console.log(tsConfigContent);
    const tsConfig = JSON.parse(tsConfigContent);

    // 获取输出目录路径
    const outDir = tsConfig.compilerOptions.outDir || './dist';

    // 递归删除目录及其内容
    async function deleteFolderRecursive(folderPath) {
      if (existsSync(folderPath)) {
        const files = await fsPromises.readdir(folderPath);
        for (const file of files) {
          const curPath = path.join(folderPath, file);
          if (lstatSync(curPath).isDirectory()) {
            await deleteFolderRecursive(curPath);
          } else {
            await fsPromises.unlink(curPath);
          }
        }
        await fsPromises.rmdir(folderPath);
      }
    }

    // 清空输出目录
    await deleteFolderRecursive(outDir);

    console.log('Output directory cleared.');
  } catch (error) {
    console.error('Error clearing output directory:', error);
  }
})();
