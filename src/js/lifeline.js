// const player = { name: 'Маг', health: 90 };

export default function healthColor(health)  {
  if (health.health > 50) {
    return 'healthy';
  }

  if (health.health < 15) {
    return 'critical';
  }

  return 'wounded';
}
