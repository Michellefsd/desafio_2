def generar_proporcion_aurea(length):
    # Definimos la constante phi (proporción áurea)
    phi = 1.618
    
    # Creamos un array inicial con el valor 1
    array = [1]
    
    # Utilizamos un bucle for para generar los siguientes elementos del array
    for i in range(1, length):
        # Calculamos el siguiente número multiplicando el último número del array por la proporción áurea
        siguiente_numero = array[-1] * phi
        
        # Redondeamos el siguiente número para que tenga máximo 3 decimales después de la coma
        siguiente_numero_redondeado = round(siguiente_numero, 3)
        
        # Agregamos el número redondeado al array
        array.append(siguiente_numero_redondeado)
    
    # Devolvemos el array con los números que siguen la proporción áurea
    return array

# Llamamos a la función para generar el array con 12 elementos
array_proporcion_aurea = generar_proporcion_aurea(12)

# Imprimimos el array resultante
print(array_proporcion_aurea)


# codigo generado por IA para 
# este no lo expuse en el DOM ya que chatgpt sugeria instalarse flask.
# (Hare eso en la parte 3 del desafio 4)