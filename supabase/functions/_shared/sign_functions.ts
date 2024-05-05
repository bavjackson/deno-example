import { default as webpush } from "npm:web-push@3.6.7";

export async function webPush() {
  const vapidKeys = webpush.generateVAPIDKeys();

  await webpush.sendNotification({ endpoint: "http://localhost" }, "", {
    vapidDetails: { ...vapidKeys, subject: "mailto:test@localhost" },
  });
}
