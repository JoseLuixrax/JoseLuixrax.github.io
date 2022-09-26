<?php
/**
 * @author Jose Luis Pérez Lara
 * Script que, a partir del radio almacenado en una variable y la definición de la constante PI, 
 * calcule el área del círculo y la longitud de la circunferencia. El debe mostrar valor de radio, 
 * longitud de la circunferencia, área del círculo y dibujará un círculo utilizando gráficos vectoriales.
 */
define("PI",3.14);
$radio = 10;
$area = PI*$radio*$radio;
$circunferencia = 2*PI*$radio;
echo "Área: $area </br>"; //Expandiendo variables.
echo 'Circunferencia: '. $circunferencia; //Concatenando variables.
echo '</br><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="'.$radio.'" />
</svg>';
echo '</br>Enlace a <a href="https://github.com/JoseLuixrax/JoseLuixrax.github.io/blob/main/circulo.php" target="_blank">GitHub</a>';