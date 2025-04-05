<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Form</title>
        <link rel="stylesheet" type="text/css" href="../css/style.css">
        <script src="../js/script.js"></script>
    </head>
    <body>
        <header>
            <div id="navImg"><img href="../img/"></div>
            <nav class="navbar">
                <div class="logo">Website</div>
                <ul class="nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="zhinengQigong.html">Zhineng Qigong</a></li>
                    <li><a href="over.html">Over Mij</a></li>
                    <li><a href="contact.php">Contact</a></li>
                </ul>
                <div class="menu-toggle" onclick="toggleMenu()">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>
        </header>

        <main>
            <h1>Contact Us</h1>
            <p>Please leave a message and we'll get back to you as soon as possible.</p>
            <div>
                <form method="POST" action="">
                    <textarea name="message" placeholder="Enter your message..." required></textarea>
                    <button type="submit" name="send">Send</button>
                </form>
            </div>
        </main>

        <footer>
            <p>&copy; All rights reserved et cetera.</p>
        </footer>

        <?php
            include('../config.php');

            if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['send'])) {
                // Use the email defined in the config.php file
                $to = RECIPIENT_EMAIL; 
                $subject = "New Message from Website";

                // Sanitize the input 
                $message = trim($_POST['message']);
                $message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8'); 

                // Block any file attachments or links
                if (preg_match("/(http|www|\.com|\.net|\.org|\.io)/i", $message)) {
                    echo "<script>alert('Links are not allowed in the message.');</script>";
                    exit();
                }

                // Send email only if message is not empty
                if (!empty($message)) {
                    // Headers to prevent header injection
                    $headers = "From: " . NO_REPLY_EMAIL . "\r\n";
                    $headers .= "Reply-To: " . NO_REPLY_EMAIL . "\r\n";
                    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

                    // Using PHP's mail function
                    if (mail($to, $subject, $message, $headers)) {
                        echo "<script>alert('Message sent successfully!');</script>";
                    } else {
                        echo "<script>alert('Failed to send message.');</script>";
                    }
                } else {
                    echo "<script>alert('Please enter a message.');</script>";
                }
            }
        ?>
    </body>
</html>
