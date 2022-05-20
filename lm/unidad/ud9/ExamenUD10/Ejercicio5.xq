(:5. Obtener la marca y el modelo de los vehículos que cuestan menos de 40000€, su precio unitario, el número total de
veces que ha sido comprado, así como el valor de esas ventas en €.:)
<ejercicio>
<identificativo>
<nombre>Jose Luis</nombre>
<apellidos>Perez Lara</apellidos>
<fecha>20/05/2022</fecha>
</identificativo>
<resultado>
{
for $vehiculos in salon/vehiculos/vehiculo
let $preciounitario := $vehiculos/precio,
$num_ventas := sum(salon/compras/cantidad[@vehiculo="$vehiculos/@cod"])
where $vehiculos/precio <40000
return <vehiculo>
<marca>{$vehiculos/marca}</marca>
<modelo>{$vehiculos/modelo}</modelo>
<precio>{$preciounitario}</precio>
<num_ventas>{$num_ventas}</num_ventas>

</vehiculo>
}
</resultado>
</ejercicio>