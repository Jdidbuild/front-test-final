export function getStatusClass(status:any): string {
    switch (status) {
      case 'Confirmé':
        return 'status-confirmed';
      case 'Annulé':
        return 'status-cancelled';
      case 'A organiser':
        return 'status-organizing';
      case 'recherche de place':
        return 'status-pending';
      default:
        return '';
    }
  }

export function  getIconClass(status: any): string {
    switch (status) {
      case 'A organiser':
        return 'fas fa-spinner';
      case 'Confirmé':
        return 'fas fa-check';
      case 'Annulé':
        return 'fas fa-times';
      case 'Recherche de place':
        return 'fas fa-pause';
      default:
        return 'fas fa-question'; // Icône par défaut
    }
}