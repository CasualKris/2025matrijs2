<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" type="text/css" href="../css/style.css">
    </head>
    <body>
        <header>
            <div id="navImg"><img href="../img/"></div>
            <nav>
                <li><a href="index.html">Home</a></li>
                <li><a href="zhinengQigong.html">Zhineng Qigong</a></li>
                <li><a href="over.html">Over Mij</a></li>
                <li><a href="contact.php">Contact</a></li>
            </nav>
        </header>
        <main>
            <h1></h1>
            <p></p>
            <div>
            <div>
                <form method="POST" action="">
                    <textarea name="message" placeholder="Vul hier uw bericht in..." required></textarea>
                    <button type="submit" name="send">Verstuur</button>
                </form>
            </div>
            <p></p>
        </main>

        <footer>
            <p>&copy; All rights reserved et cetera.</p>
        </footer>

        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['send'])) {
            $to = "text.com";
            $subject = "New Message from Website";
            $message = htmlspecialchars($_POST['message']);
            $headers = "From: no-reply@yourwebsite.com\r\n";
            $headers .= "Reply-To: no-reply@yourwebsite.com\r\n";
            $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

            if (!empty($message)) {
                if (mail($to, $subject, $message, $headers)) {
                    echo "<script>alert('Bericht succesvol verzonden!');</script>";
                } else {
                    echo "<script>alert('Bericht verzenden is mislukt.');</script>";
                }
            } else {
                echo "<script>alert('Please enter a message.');</script>";
            }
        }
        ?>
    </body>
</html>