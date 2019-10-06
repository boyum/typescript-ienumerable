# x-akse: []
# y-akse: []

# År 0: 
# x-akse: [0]
# y-akse: [0]

# År 1:
# x-akse: [0, 1]
# y-akse: [0, 0.5]

years = []
decayFractions = []

currentYear = 0
currentDecay = 0

years.append(currentYear)
decayFractions.append(currentDecay)

# Ha en fin dag 🌼

index = 0

while year <= 75000:
  index = index + 1

  currentYear = currentYear + 5730
  currentDecay = (1 - decayFractions[index - 1]) * 0.5

  years.append(currentYear)
  decayFractions.append(currentDecay)

plot(years, decayFractions)





