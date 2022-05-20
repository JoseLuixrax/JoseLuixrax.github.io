(: 7. Obtener, usando let, la suma de los salarios de los gestores que cobran mas de 900 €, que viven en la provincia de
Jaén (excepto los que viven en la capital) y además no tienen código D.:)
<ejercicio>
<identificativo>
<nombre>Jose Luis</nombre>
<apellidos>Perez Lara</apellidos>
<fecha>20/05/2022</fecha>
</identificativo>
<resultado>
{
  let $sum_salarios:= sum(salon/gestores/gestor[salario>900 and provincia="Jaén" and Localidad!="Jaén"])
  where salon/gestores/gestor[not(@cod="D")]
  return <sum_salarios>{$sum_salarios}</sum_salarios>
}
</resultado>
</ejercicio>