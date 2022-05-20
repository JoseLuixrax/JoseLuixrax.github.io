(:3. Obtener los modelos de todos los vehículos, ordenados primero por orden alfabético ascendente (marca primero y
modelo después) y luego por precio (de menor a mayor).:)
<ejercicio>
<identificativo>
<nombre>Jose Luis</nombre>
<apellidos>Perez Lara</apellidos>
<fecha>20/05/2022</fecha>
</identificativo>
<resultado>
{
for $vehiculo in salon/vehiculos/vehiculo
order by $vehiculo/marca, $vehiculo/modelo,
         $vehiculo/precio
return $vehiculo
}
</resultado>
</ejercicio>