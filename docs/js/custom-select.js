new CustomSelect('#sort-filter-list', {
  name: 'sort-option',
  targetValue: 'default',
  options: [
    ['default', 'по умолчанию'],
    ['first-expensive', 'сначала дорогие'],
    ['first-cheap', 'сначала дешевые'],
    ['high-rate', 'высокий рейтинг']
  ]
});
