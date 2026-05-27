const fs = require('fs')

const languages = [
  'zh-CN',
  'zh-CHT',
  'uk-UA',
  'ru-RU',
  'pt-BR',
  'ko-KR',
  'ja-JP',
  'fr-FR',
  'es-ES',
  'en-US',
  'de-DE',
  'ar-EG'
]

/**
 * 将 source 对象的属性覆盖到 target，但只覆盖 target 中已存在的属性（不添加新属性）
 * @param {Object} target - 目标对象（会被修改）
 * @param {Object} source - 源对象
 * @returns {Object} 修改后的 target 对象
 */
function deepAssignIfExists (target, source) {
  // 边界处理：非对象或 null 直接返回（不操作）
  if (!target || typeof target !== 'object') {
    return target
  }
  if (!source || typeof source !== 'object') {
    return target
  }

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        const sourceVal = source[key]
        const targetVal = target[key]

        if (sourceVal && typeof sourceVal === 'object' && !Array.isArray(sourceVal) &&
          targetVal && typeof targetVal === 'object' && !Array.isArray(targetVal)) {
          deepAssignIfExists(targetVal, sourceVal)
        } else {
          target[key] = sourceVal
        }
      }
    }
  }

  return target
}

const langDir = 'i18n'
const otherLanguages = languages.filter(key => key !== 'zh-CN')

const zhCnStr = fs.readFileSync(`${langDir}/zh-CN.json`, 'utf-8')

otherLanguages.forEach(key => {
  const langJson = JSON.parse(fs.readFileSync(`${langDir}/${key}.json`, 'utf-8'))
  const currJson = JSON.parse(zhCnStr)
  deepAssignIfExists(currJson, langJson)
  fs.writeFileSync(`${langDir}/${key}.json`, JSON.stringify(currJson, null, 2) + '\n')
})
