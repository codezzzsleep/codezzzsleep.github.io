```js
(async function() {
    try {
        // 1. 获取会话信息
        const t = await (await fetch("/api/auth/session")).json();

        // 2. 检查是否已登录
        if (!t.accessToken) {
            alert("请先登录 ChatGPT！");
            return;
        }

        // 3. 构建请求载荷
        const p = {
            plan_name: "chatgptteamplan",
            team_plan_data: {
                workspace_name: "Fangmu",
                price_interval: "month",
                seat_quantity: 5
            },
            promo_campaign: {
                promo_campaign_id: "team-1-month-free",
                is_coupon_from_query_param: true
            },
            checkout_ui_mode: "custom"
        };

        // 4. 发送支付/结账请求
        const r = await fetch("https://chatgpt.com/backend-api/payments/checkout", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + t.accessToken,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(p)
        });

        // 5. 处理响应
        const d = await r.json();
        if (d.checkout_session_id) {
                        // 跳转短链接
            window.location.href = "https://chatgpt.com/checkout/openai_llc/" + d.checkout_session_id;
        } else {
            alert("提取失败：" + (d.detail || JSON.stringify(d)));
        }
    } catch (e) {
        alert("发生错误：" + e);
    }
})();
```
```bash
 wget -O box.sh https://raw.githubusercontent.com/BlueSkyXN/SKY-BOX/main/box.sh && chmod +x box.sh && clear && ./box.sh
```
```bash
curl -O https://raw.githubusercontent.com/V2RaySSR/Trojan/master/Trojan.sh && chmod +x trojan.sh && ./trojan.sh
```
