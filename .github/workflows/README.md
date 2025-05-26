# GitHub Actions Setup for EC2 Deployment

## Step 1: Update and Install Git on EC2

```bash
sudo yum update -y
sudo yum install git -y
```

## Step 2: Clone Your Repository

```bash
git clone https://github.com/Bryan03A/web_interface.git
```

## Step 3: Install and Start Apache Web Server

```bash
sudo yum install httpd -y
sudo systemctl start httpd
sudo systemctl enable httpd
```

## Step 4: Copy Project Files to Apache Root Directory

```bash
sudo cp -r /home/ec2-user/web_interface/* /var/www/html/
```

## Step 5: Verify Your Website

Open your browser and navigate to:

```
http://<EC2-PUBLIC-IP>/
```

You should see your website loaded.

---

## Step 6: Configure GitHub Secrets

Go to your GitHub repository:

- Navigate to **Settings** > **Secrets and variables** > **Actions** > **New repository secret**

Add the following secrets:

- `EC2_HOST`: Your EC2 instance public IP address
- `EC2_KEY`: The content of your `MyPassDP.pem` file  
  (⚠ Make sure to paste the entire key including the lines  
  `-----BEGIN RSA PRIVATE KEY-----` and `-----END RSA PRIVATE KEY-----`)

---

## Step 7: Test GitHub Actions Deployment

Make a commit and push to trigger the workflow:

```bash
git add .
git commit -m "Configure GitHub Actions for EC2 deploy"
git push origin main
```

This should trigger the GitHub Actions workflow and automatically deploy your site to the EC2 instance.

---

# Enjoy automated deployments!
