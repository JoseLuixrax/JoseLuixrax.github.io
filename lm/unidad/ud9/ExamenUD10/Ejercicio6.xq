(:6. Obtener el mayor y menor salario de los gestores.:)
<ejercicio>
<identificativo>
<nombre>Jose Luis</nombre>
<apellidos>Perez Lara</apellidos>
<fecha>20/05/2022</fecha>
</identificativo>
<resultado>
{
for $gestores in salon/gestores
return <gestores> 
<salarioMaximo>{max($gestores/gestor/salario)}</salarioMaximo>
<salarioMinimo>{min($gestores/gestor/salario)}</salarioMinimo>
</gestores>
}
</resultado>
</ejercicio>