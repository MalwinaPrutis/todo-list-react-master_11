// src/features/tasks/getExampleTasks.js

export const getExampleTasks = async () => {
    // Używamy PUBLIC_URL, aby poprawnie odwołać się do pliku w folderze public/
    const response = await fetch(`${process.env.PUBLIC_URL}/exampleTasks.json`); 

    // Sprawdzamy, czy odpowiedź serwera jest pomyślna
    if (!response.ok) {
        // Rzucamy błąd z konkretnym statusem
        throw new Error(response.statusText);
    }

    // Parsujemy JSON i zwracamy dane
    return await response.json();
};