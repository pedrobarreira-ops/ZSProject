/**
 * Example: Restaurant Online Ordering System
 * 
 * This is an example implementation showing how to build
 * a restaurant website that accepts takeaway/delivery orders
 * and connects to Zonesoft API.
 * 
 * This is a template - customize it based on your needs!
 */

import { ZonesoftClient } from '../api/zonesoft-client';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface OrderItem {
  menuItemId: string;
  quantity: number;
  specialInstructions?: string;
}

export interface Order {
  items: OrderItem[];
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  deliveryAddress?: string;
  orderType: 'delivery' | 'takeaway';
  tip?: number;
}

export class RestaurantOrderingSystem {
  private zonesoftClient: ZonesoftClient;

  constructor(zonesoftClient: ZonesoftClient) {
    this.zonesoftClient = zonesoftClient;
  }

  /**
   * Fetch menu items from Zonesoft
   */
  async getMenu(): Promise<MenuItem[]> {
    try {
      const items = await this.zonesoftClient.getMenuItems();
      return items; // Transform to MenuItem format if needed
    } catch (error) {
      console.error('Error fetching menu:', error);
      throw error;
    }
  }

  /**
   * Submit an order to Zonesoft
   */
  async submitOrder(order: Order): Promise<string> {
    try {
      // Transform order to Zonesoft API format
      const zonesoftOrder = this.transformOrderToZonesoftFormat(order);
      
      const result = await this.zonesoftClient.createOrder(zonesoftOrder);
      return result.orderId; // Return the order ID
    } catch (error) {
      console.error('Error submitting order:', error);
      throw error;
    }
  }

  /**
   * Check order status
   */
  async checkOrderStatus(orderId: string): Promise<string> {
    try {
      const order = await this.zonesoftClient.getOrderStatus(orderId);
      return order.status;
    } catch (error) {
      console.error('Error checking order status:', error);
      throw error;
    }
  }

  /**
   * Transform our order format to Zonesoft API format
   * TODO: Customize this based on actual Zonesoft API requirements
   */
  private transformOrderToZonesoftFormat(order: Order): any {
    return {
      items: order.items,
      customer: {
        name: order.customerName,
        phone: order.customerPhone,
        email: order.customerEmail,
      },
      delivery: order.orderType === 'delivery' ? {
        address: order.deliveryAddress,
      } : null,
      orderType: order.orderType,
      tip: order.tip || 0,
    };
  }
}






