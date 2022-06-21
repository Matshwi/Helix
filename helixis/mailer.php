<script type="text/javascript">
var abc= 'this is text';
<?php $abc = "<script>document.write(abc)</script>"?>   
</script>
<?php echo $abc;?>


/*


print_r($_POST)


$to = variable;


$subject = "Appointment Set";


$message = "Hi name

    Thank you for writing to confirm our appointment. I have you scheduled on the calendar on this date at 09:00 at [location]. Please contact this number 011 234 5678 or info@helix.com if you have any questions before the meeting. I appreciate your timely attendance at this appointment.

Sincerely,
Helix Team";

$headers = "From: email@email.com";

$headers = "Reply-to: email@email.com\r\n";

$headers = "Content-type: text/html\r\n";

mail($to, $subject, $message, $headers)

*/