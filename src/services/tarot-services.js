export default async function CardTarot() {
    try {
      const response = await fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/');
      const data = await response.json();
      return data
    } catch (error) {
      console.log('Ocurrió un error:', error);
    }
}