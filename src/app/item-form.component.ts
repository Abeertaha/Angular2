import { Component } from '@angular/core';

@Component({
  selector: 'app-item-form',
  template: `
    <h2>Add/Edit Item</h2>
    <form>
      <div class="form-group">
        <label>ID:</label>
        <input type="text" [(ngModel)]="item.id" name="id" required>
      </div>

      <div class="form-group">
        <label>Name:</label>
        <input type="text" [(ngModel)]="item.name" name="name" required>
      </div>

      <div class="button-group">
        <button class="btn-save" (click)="saveItem()">Save</button>
        <button class="btn-cancel" (click)="cancel()">Cancel</button>
      </div>
    </form>
  `,
  styles: [`
    .form-group {
      margin-bottom: 20px;
    }

    label {
      display: block;
      font-weight: bold;
    }

    input[type="text"] {
      width: 100%;
      padding: 5px;
      border: 1px solid #ccc;
    }

    .button-group {
      margin-top: 20px;
    }

    .btn-save,
    .btn-cancel {
      padding: 10px 20px;
      border: none;
      color: #fff;
      cursor: pointer;
    }

    .btn-save {
      background-color: #5cb85c;
    }

    .btn-cancel {
      background-color: #d9534f;
    }
  `]
})
export class ItemFormComponent {
  item: any = {};

  saveItem() {
    // Save the item to the data source
    console.log('Saving item:', this.item);
    // Add your logic here to handle saving the item
  }

  cancel() {
    // Reset the form
    this.item = {};
  }
}