const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 3001; // 替換為你的後端服務的實際埠號

app.use(cors());
app.use(bodyParser.json());

const userData = []; // 用來存放使用者資料的陣列

// Nodemailer 設定
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ylanlan.yichun@gmail.com', // 替換為你的 Gmail 帳號
    pass: '@Manq992tut'  // 替換為你的 Gmail 密碼或應用程式密碼
  }
});

app.post('/saveUserData', async (req, res) => {
  const { name, phoneNumber } = req.body;

  // 簡單的驗證，請根據實際需求進行更完整的驗證
  if (!name || !phoneNumber) {
    return res.status(400).json({ error: '請提供姓名和電話號碼' });
  }

  const newUser = { name, phoneNumber };
  userData.push(newUser);

  // 寄送郵件通知
  try {
    const mailOptions = {
      from: 'your-email@gmail.com', // 替換為你的寄件者郵箱
      to: 'your-email@gmail.com',   // 替換為你要接收通知的郵箱
      subject: '新的訂位通知',
      text: `新的訂位：
            姓名：${name}
            電話號碼：${phoneNumber}`
    };

    await transporter.sendMail(mailOptions);
    console.log('已發送郵件通知');
  } catch (error) {
    console.error('郵件通知發送失敗:', error);
  }

  res.status(200).json({ message: '資料已成功儲存' });
});

app.listen(port, () => {
  console.log(`後端伺服器正在監聽 ${port} 端口`);
});
