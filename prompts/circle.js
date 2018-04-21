const Circle = require(`../store/plugins/circle.js`)
module.exports.options = {
  permissions: 0
}

module.exports.execute = async (client, message, presets) => {
  if (presets.arguments[0]) {
    if (isNaN(presets.arguments[0]) === true) return
    message.channel.send({embed: {
     color: 16761035,
     title: `About radius ` + presets.arguments[0],
     description: `**PI** ${Math.PI}\n**Radius** ${presets.arguments[0]}\n**Area** ${Circle.area(presets.arguments[0])}\n**Circumference** ${Circle.circumference(presets.arguments[0])}`
    }})
  } else {
    message.reply(`Returns you circle circumference and area about radius.`)
  }
}
