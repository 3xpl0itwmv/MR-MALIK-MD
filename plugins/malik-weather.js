import axios from "axios"
let handler = async (m, { args }) => {
if (!args[0]) throw "*Give A Place To Search*"
try {
const response = axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
const res = await response
const name ="*" + res.data.city.name + "*"
const Country = res.data.city.country
const Weather ="\n *" + res.data.list[0].weather[0].description + "*\n"
const cldc = res.data.list[0].clouds.all + "%*"
const Temperature = res.data.list[0].main.temp + "°C"
const Wind = res.data.list[0].wind.speed + "km/h"
const dt1 ="\n *" + res.data.list[0].dt_txt + "*\n"
const Weather1 ="\n *" + res.data.list[1].weather[0].description + "*\n"
const cldc1 = res.data.list[1].clouds.all + "%"
const Temperature1 = res.data.list[1].main.temp + "°C"
const Wind1 = res.data.list[1].wind.speed + "km/h"
const dt2 ="\n *" + res.data.list[1].dt_txt + "*\n"
const Weather2 ="\n *" + res.data.list[2].weather[0].description + "*\n"
const cldc2 = res.data.list[2].clouds.all + "%"
const Temperature2 = res.data.list[2].main.temp + "°C"
const Wind2 = res.data.list[2].wind.speed + "km/h"
const dt3 ="\n *" + res.data.list[2].dt_txt + "*\n"
const Weather3 ="\n *" + res.data.list[3].weather[0].description + "*\n"
const cldc3 =res.data.list[3].clouds.all + "%"
const Temperature3 = res.data.list[3].main.temp + "°C"
const Wind3 = res.data.list[3].wind.speed + "km/h"
const dt4 ="\n *" + res.data.list[3].dt_txt + "*\n"
const Weather4 ="\n *" + res.data.list[4].weather[0].description + "*\n"
const cldc4 = res.data.list[4].clouds.all + "%"
const Temperature4 = res.data.list[4].main.temp + "°C"
const Wind4 = res.data.list[4].wind.speed + "km/h"
const dt5 ="\n *" + res.data.list[4].dt_txt + "*\n"
const Weather5 ="\n *" + res.data.list[5].weather[0].description + "*\n"
const cldc5 = res.data.list[5].clouds.all + "%"
const Temperature5 = res.data.list[5].main.temp + "°C"
const Wind5 = res.data.list[5].wind.speed + "km/h"
const dt6 ="\n *" + res.data.list[5].dt_txt + "*\n"
const Weather6 ="\n *" + res.data.list[6].weather[0].description + "*\n"
const cldc6 = res.data.list[6].clouds.all + "%"
const Temperature6 = res.data.list[6].main.temp + "°C"
const Wind6 = res.data.list[6].wind.speed + "km/h"
const dt7 ="\n *" + res.data.list[6].dt_txt + "*\n"
const Weather7 ="\n *" + res.data.list[7].weather[0].description + "*\n"
const cldc7 = res.data.list[7].clouds.all + "%"
const Temperature7 = res.data.list[7].main.temp + "°C"
const Wind7 = res.data.list[7].wind.speed + "km/h"
const dt8 ="\n *" + res.data.list[7].dt_txt + "*\n"
const Weather8 ="\n *" + res.data.list[8].weather[0].description + "*\n"
const cldc8 = res.data.list[8].clouds.all + "%"
const Temperature8 = res.data.list[8].main.temp + "°C"
const Wind8 = res.data.list[8].wind.speed + "km/h"
const dt9 ="\n *" + res.data.list[8].dt_txt + "*\n"
const Weather9 ="\n *" + res.data.list[9].weather[0].description + "*\n"
const cldc9 = res.data.list[9].clouds.all + "%"
const Temperature9 = res.data.list[9].main.temp + "°C"
const Wind9 = res.data.list[9].wind.speed + "km/h"
const dt10 ="\n *" + res.data.list[9].dt_txt + "*\n"
const Weather10 ="\n *" + res.data.list[10].weather[0].description + "*\n"
const cldc10 = res.data.list[10].clouds.all + "%"
const Temperature10 = res.data.list[10].main.temp + "°C"
const Wind10 = res.data.list[10].wind.speed + "km/h"
const dt11 ="\n *" + res.data.list[10].dt_txt + "*\n"
const Weather11 ="\n *" + res.data.list[11].weather[0].description + "*\n"
const cldc11 = res.data.list[11].clouds.all + "%"
const Temperature11 = res.data.list[11].main.temp + "°C"
const Wind11 = res.data.list[11].wind.speed + "km/h"
const dt12 ="\n *" + res.data.list[11].dt_txt + "*\n"
const Weather12 ="\n *" + res.data.list[12].weather[0].description + "*\n"
const cldc12 = res.data.list[12].clouds.all + "%"
const Temperature12 = res.data.list[12].main.temp + "°C"
const Wind12 = res.data.list[12].wind.speed + "km/h"
const dt13 ="\n *" + res.data.list[12].dt_txt + "*\n"
const Weather13 ="\n *" + res.data.list[13].weather[0].description + "*\n"
const cldc13 = res.data.list[13].clouds.all + "%"
const Temperature13 = res.data.list[13].main.temp + "°C"
const Wind13 = res.data.list[13].wind.speed + "km/h"
const dt14 ="\n *" + res.data.list[13].dt_txt + "*\n"
const Weather14 ="\n *" + res.data.list[14].weather[0].description + "*\n"
const cldc14 = res.data.list[14].clouds.all + "%"
const Temperature14 = res.data.list[14].main.temp + "°C"
const Wind14 = res.data.list[14].wind.speed + "km/h"
const dt15 ="\n *" + res.data.list[14].dt_txt + "*\n"
const Weather15 ="\n *" + res.data.list[15].weather[0].description + "*\n"
const cldc15 = res.data.list[15].clouds.all + "%"
const Temperature15 = res.data.list[15].main.temp + "°C"
const Wind15 = res.data.list[15].wind.speed + "km/h"
const dt16 ="\n *" + res.data.list[15].dt_txt + "*\n"
const Weather16 ="\n *" + res.data.list[16].weather[0].description + "*\n"
const cldc16 = res.data.list[16].clouds.all + "%"
const Temperature16 = res.data.list[16].main.temp + "°C"
const Wind16 = res.data.list[16].wind.speed + "km/h"
const dt17 ="\n *" + res.data.list[16].dt_txt + "*\n"
const Weather17 ="\n *" + res.data.list[17].weather[0].description + "*\n"
const cldc17 = res.data.list[17].clouds.all + "%"
const Temperature17 = res.data.list[17].main.temp + "°C"
const Wind17 = res.data.list[17].wind.speed + "km/h"
const dt18 ="\n *" + res.data.list[17].dt_txt + "*\n"
const Weather18 ="\n *" + res.data.list[18].weather[0].description + "*\n"
const cldc18 = res.data.list[18].clouds.all + "%"
const Temperature18 = res.data.list[18].main.temp + "°C"
const Wind18 = res.data.list[18].wind.speed + "km/h"
const dt19 ="\n *" + res.data.list[18].dt_txt + "*\n"
const Weather19 ="\n *" + res.data.list[19].weather[0].description + "*\n"
const cldc19 = res.data.list[19].clouds.all + "%"
const Temperature19 = res.data.list[19].main.temp + "°C"
const Wind19 = res.data.list[19].wind.speed + "km/h"
const dt20 ="\n *" + res.data.list[19].dt_txt + "*\n"
const Weather20 ="\n *" + res.data.list[20].weather[0].description + "*\n"
const cldc20 = res.data.list[20].clouds.all + "%"
const Temperature20 = res.data.list[20].main.temp + "°C"
const Wind20 = res.data.list[20].wind.speed + "km/h"
const dt21 ="\n *" + res.data.list[20].dt_txt + "*\n"
const Weather21 ="\n *" + res.data.list[21].weather[0].description + "*\n"
const cldc21 = res.data.list[21].clouds.all + "%"
const Temperature21 = res.data.list[21].main.temp + "°C"
const Wind21 = res.data.list[21].wind.speed + "km/h"
const dt22 ="\n *" + res.data.list[21].dt_txt + "*\n"
const Weather22 ="\n *" + res.data.list[22].weather[0].description + "*\n"
const cldc22 = res.data.list[22].clouds.all + "%"
const Temperature22 = res.data.list[22].main.temp + "°C"
const Wind22 = res.data.list[22].wind.speed + "km/h"
const dt23 ="\n *" + res.data.list[22].dt_txt + "*\n"
const Weather23 ="\n *" + res.data.list[23].weather[0].description + "*\n"
const cldc23 = res.data.list[23].clouds.all + "%"
const Temperature23 = res.data.list[23].main.temp + "°C"
const Wind23 = res.data.list[23].wind.speed + "km/h"
const dt24 ="\n *" + res.data.list[23].dt_txt + "*\n"
const Weather24 ="\n *" + res.data.list[24].weather[0].description + "*\n"
const cldc24 = res.data.list[24].clouds.all + "%"
const Temperature24 = res.data.list[24].main.temp + "°C"
const Wind24 = res.data.list[24].wind.speed + "km/h"
const wea = `🤖Ｍ R - M A L I K\n Whatsapp Weather *Prediction* System\n\n 🚩 Created by: *Nasrullah* \n follow me on facebook:\n facebook.com/NasrullahMachi\n\n  🔴 *Now*\n「 📍 」PLACE: ${name}\n「 🗺️ 」COUNTRY: ${Country}\n「 🌤️ 」VIEW: ${Weather}\n「 🌡️ 」TEMPERATURE: ${Temperature}\n「 ☁ 」 Clouds Cover: ${cldc}\n「 🌀 」WINDSPEED: ${Wind}\n「 📅️ 」Date: ${dt1}\n「 🌤️ 」VIEW: ${Weather1}\n「 🌡️ 」TEMPERATURE: ${Temperature1}\n「 ☁ 」 Clouds Cover: ${cldc1}\n「 🌀 」WINDSPEED: ${Wind1}\n「 📅️ 」Date: ${dt2}\n「 🌤️ 」VIEW: ${Weather2}\n「 🌡️ 」TEMPERATURE: ${Temperature2}\n「 ☁ 」 Clouds Cover: ${cldc2}\n「 🌀 」WINDSPEED: ${Wind2}\n「 📅️ 」Date: ${dt3}\n「 🌤️ 」VIEW: ${Weather3}\n「 🌡️ 」TEMPERATURE: ${Temperature3}\n「 ☁ 」 Clouds Cover: ${cldc3}\n「 🌀 」WINDSPEED: ${Wind3}\n「 📅️ 」Date: ${dt4}\n「 🌤️ 」VIEW: ${Weather4}\n「 🌡️ 」TEMPERATURE: ${Temperature4}\n「 ☁ 」 Clouds Cover: ${cldc4}\n「 🌀 」WINDSPEED: ${Wind4}\n「 📅️ 」Date: ${dt5}\n「 🌤️ 」VIEW: ${Weather5}\n「 🌡️ 」TEMPERATURE: ${Temperature5}\n「 ☁ 」 Clouds Cover: ${cldc5}\n「 🌀 」WINDSPEED: ${Wind5}\n「 📅️ 」Date: ${dt6}\n「 🌤️ 」VIEW: ${Weather6}\n「 🌡️ 」TEMPERATURE: ${Temperature6}\n「 ☁ 」 Clouds Cover: ${cldc6}\n「 🌀 」WINDSPEED: ${Wind6}\n「 📅️ 」Date: ${dt7}\n「 🌤️ 」VIEW: ${Weather7}\n「 🌡️ 」TEMPERATURE: ${Temperature7}\n「 ☁ 」 Clouds Cover: ${cldc7}\n「 🌀 」WINDSPEED: ${Wind7}\n「 📅️ 」Date: ${dt8}\n「 🌤️ 」VIEW: ${Weather8}\n「 🌡️ 」TEMPERATURE: ${Temperature8}\n「 ☁ 」 Clouds Cover: ${cldc8}\n「 🌀 」WINDSPEED: ${Wind8}\n「 📅️ 」Date: ${dt9}\n「 🌤️ 」VIEW: ${Weather9}\n「 🌡️ 」TEMPERATURE: ${Temperature9}\n「 ☁ 」 Clouds Cover: ${cldc9}\n「 🌀 」WINDSPEED: ${Wind9}\n「 📅️ 」Date: ${dt10}\n「 🌤️ 」VIEW: ${Weather10}\n「 🌡️ 」TEMPERATURE: ${Temperature10}\n「 ☁ 」 Clouds Cover: ${cldc10}\n「 🌀 」WINDSPEED: ${Wind10}\n「 📅️ 」Date: ${dt11}\n「 🌤️ 」VIEW: ${Weather11}\n「 🌡️ 」TEMPERATURE: ${Temperature11}\n「 ☁ 」 Clouds Cover: ${cldc11}\n「 🌀 」WINDSPEED: ${Wind11}\n「 📅️ 」Date: ${dt12}\n「 🌤️ 」VIEW: ${Weather12}\n「 🌡️ 」TEMPERATURE: ${Temperature12}\n「 ☁ 」 Clouds Cover: ${cldc12}\n「 🌀 」WINDSPEED: ${Wind12}\n「 📅️ 」Date: ${dt13}\n「 🌤️ 」VIEW: ${Weather13}\n「 🌡️ 」TEMPERATURE: ${Temperature13}\n「 ☁ 」 Clouds Cover: ${cldc13}\n「 🌀 」WINDSPEED: ${Wind13}\n「 📅️ 」Date: ${dt14}\n「 🌤️ 」VIEW: ${Weather14}\n「 🌡️ 」TEMPERATURE: ${Temperature14}\n「 ☁ 」 Clouds Cover: ${cldc14}\n「 🌀 」WINDSPEED: ${Wind14}\n「 📅️ 」Date: ${dt15}\n「 🌤️ 」VIEW: ${Weather15}\n「 🌡️ 」TEMPERATURE: ${Temperature15}\n「 ☁ 」 Clouds Cover: ${cldc15}\n「 🌀 」WINDSPEED: ${Wind15}\n「 📅️ 」Date: ${dt16}\n「 🌤️ 」VIEW: ${Weather16}\n「 🌡️ 」TEMPERATURE: ${Temperature16}\n「 ☁ 」 Clouds Cover: ${cldc16}\n「 🌀 」WINDSPEED: ${Wind16}\n「 📅️ 」Date: ${dt17}\n「 🌤️ 」VIEW: ${Weather17}\n「 🌡️ 」TEMPERATURE: ${Temperature17}\n「 ☁ 」 Clouds Cover: ${cldc17}\n「 🌀 」WINDSPEED: ${Wind17}\n「 📅️ 」Date: ${dt18}\n「 🌤️ 」VIEW: ${Weather18}\n「 🌡️ 」TEMPERATURE: ${Temperature18}\n「 ☁ 」 Clouds Cover: ${cldc18}\n「 🌀 」WINDSPEED: ${Wind18}\n「 📅️ 」Date: ${dt19}\n「 🌤️ 」VIEW: ${Weather19}\n「 🌡️ 」TEMPERATURE: ${Temperature19}\n「 ☁ 」 Clouds Cover: ${cldc19}\n「 🌀 」WINDSPEED: ${Wind19}\n「 📅️ 」Date: ${dt20}\n「 🌤️ 」VIEW: ${Weather20}\n「 🌡️ 」TEMPERATURE: ${Temperature20}\n「 ☁ 」 Clouds Cover: ${cldc20}\n「 🌀 」WINDSPEED: ${Wind20}\n「 📅️ 」Date: ${dt21}\n「 🌤️ 」VIEW: ${Weather21}\n「 🌡️ 」TEMPERATURE: ${Temperature21}\n「 ☁ 」 Clouds Cover: ${cldc21}\n「 🌀 」WINDSPEED: ${Wind21}\n「 📅️ 」Date: ${dt22}\n「 🌤️ 」VIEW: ${Weather22}\n「 🌡️ 」TEMPERATURE: ${Temperature22}\n「 ☁ 」 Clouds Cover: ${cldc22}\n「 🌀 」WINDSPEED: ${Wind22}\n「 📅️ 」Date: ${dt23}\n「 🌤️ 」VIEW: ${Weather23}\n「 🌡️ 」TEMPERATURE: ${Temperature23}\n「 ☁ 」 Clouds Cover: ${cldc23}\n「 🌀 」WINDSPEED: ${Wind23}\n[ 📅️ 」Date: ${dt24}\n「 🌤️ 」VIEW: ${Weather24}\n「 🌡️ 」TEMPERATURE: ${Temperature24}\n「 ☁ 」 Clouds Cover: ${cldc24}\n「 🌀 」WINDSPEED: ${Wind24}`
m.reply(wea)
} catch {
return "*ERROR*"}}
handler.help = ['climate2 *<place>*']
handler.tags = ['herramientas']
handler.command = /^(climatrre2|weather)$/i
export default handler