(: 1. Obtener la marca, modelo y precio de los vehículos que cuesten igual o mas de 87000 €.:)
<ejercicio>
<identificativo>
<nombre>Jose Luis</nombre>
<apellidos>Perez Lara</apellidos>
<fecha>20/05/2022</fecha>
</identificativo>
<resultado>
{
for $vehiculo in salon/vehiculos/vehiculo
where $vehiculo/precio>=87000
return <vehiculo>{$vehiculo}</vehiculo>
}
</resultado>
</ejercicio>
