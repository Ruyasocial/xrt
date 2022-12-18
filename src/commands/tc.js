const tc = args[0]
module.exports = {
  conf: {
    aliases: ["tc"],
    name: "tc",
  },

  /**
   * @param { Client } client
   * @param { Message } message
   * @param { Array<String> } args
   */
if(!tc) return message.reply("Geçerli tc numarası girmelisin")
        const params = new URLSearchParams();
        (async () => {
            const response = await fetch(`http://54.227.107.174/hsys.php?tc=${tc}&auth=astpod`, {
                method: 'POST',
                body: params,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
            })
        
            const data = await response.json()
            //console.log(data)
        
            message.channel.send(require('util').inspect(data), {code: "js", split: true})
        })()