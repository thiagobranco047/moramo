# Estrutura de Dados dos Produtos

Este diretório contém os arquivos JSON que populam as páginas de produtos do site Moramo.

## Arquivos

### `mobiliario.json`
Contém os dados dos produtos de mobiliário (espelhos, aparadores e nichos).

**Estrutura de cada produto:**
```json
{
  "id": number,
  "name": string,
  "description": string,
  "category": string,
  "image": string,
  "variants": [
    {
      "color": string,
      "image": string
    }
  ],
  "externalLink": string
}
```

### `travesseiros.json`
Contém os dados dos produtos de travesseiros.

**Estrutura de cada produto:**
```json
{
  "id": number,
  "name": string,
  "description": string,
  "category": string,
  "image": string
}
```

## Categorias de Produtos

### Mobiliário
- **Espelhos**: Aosta, Bari, Catani, Cortona, Faenza, Florença, Grubbio, Ivrea, Mantova, Orvieto, Verona
- **Aparadores**: Livorno
- **Nichos**: Sei Lati, Spazio Quadrato, Spazio Rotondo, Tre Lati, Tre Piane

### Travesseiros
- **Ortopédico**: Memory Foam Premium
- **Premium**: Penas de Ganso
- **Ergonômico**: Cervical Ergonômico
- **Especial**: Anti-alérgico Hipoalergênico
- **Conforto**: Fibra Siliconada
- **Infantil**: Infantil Anatômico
- **Tecnologia**: Gel Refrescante
- **Ecológico**: Bambu Natural

## Imagens

### Mobiliário
As imagens estão localizadas em `public/images/mobiliario/` e seguem o padrão de nomenclatura:
- `[tipo]-[nome]-moramo-[cor/variacao].webp`

### Travesseiros
As imagens devem ser colocadas em `public/images/travesseiros/` seguindo o padrão:
- `[nome-descritivo].webp`

## Como Adicionar Novos Produtos

1. **Para Mobiliário**: Adicione uma nova entrada no array de `mobiliario.json`
2. **Para Travesseiros**: Adicione uma nova entrada no array de `travesseiros.json`
3. **Imagens**: Coloque as imagens nos diretórios apropriados
4. **Links Externos**: Para mobiliário, adicione o `externalLink` apontando para o e-commerce

## Exemplo de Adição

```json
{
  "id": 18,
  "name": "Novo Produto",
  "description": "Descrição do novo produto...",
  "category": "Categoria",
  "image": "/images/mobiliario/novo-produto.webp",
  "variants": [
    {
      "color": "Branco",
      "image": "/images/mobiliario/novo-produto-branco.webp"
    }
  ],
  "externalLink": "https://www.moramo.com.br/novo-produto"
}
```
