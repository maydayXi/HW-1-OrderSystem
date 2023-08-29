# 作業 - 點餐管理系統

## 第一週

- **Level 1：將菜單轉為資料格式**
- **Level 2：可以重新設定菜單的庫存數量**
- **Level 3（挑戰）：可以重新設定品項名稱**

## 第二週

**餐點管理工具**
- **Level 1：至少製作三個元件（可選擇：左側餐點列表單一品項、單一 、下方的訂單摘要），要會動**
- **Level 2：製作菜單工具，可加入購物車並產出結果，一樣至少需做三個元件**
- **Level 3：加入刪除、調整數量功能，重複品項數量會加 1、客製化版型**

## 範例
[Sample Code](https://www.casper.tw/react-2023-homework/)

## Screenshot
<img src="https://i.imgur.com/vtwIbsX.png" width="80%" alt="main frame">

<img src="https://i.imgur.com/d9Ji4AB.png" width="80%" alt="settings modal">

<img src="https://i.imgur.com/gBjgIbj.png>" width="80%" alt="settings validation">

## History 
<table>
    <thead>
        <tr>
            <th style="text-align: center;">Date</th>
            <th style="text-align: center;">Version</th>
            <th style="text-align: center;">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="2" style="text-align: center; font-weight: bolder;">2023-08-11</td>
            <td rowspan="2" style="font-weight: bolder;">V 0.0.1</td>
            <td>deploy gh-pages</td>
        </tr>
        <tr>
            <td>Add products.json, Level 1 finished.</td>
        </tr>
        <tr>
            <td rowspan="16" style="text-align: center; font-weight: bolder;">2023-08-13</td>
            <td rowspan="3" style="font-weight: bolder;">V 0.0.2</td>
            <td>Add product images</td>
        </tr>
        <tr>
            <td>Reset index, index style, App.jsx</td>
        </tr>
        <tr>
            <td>Move product images -> public</td>
        </tr>
        <tr>
            <td rowspan="2">V 0.0.3</td>
            <td>Update website title</td>
        </tr>
        <tr>
            <td>Update products image path</td>
        </tr>
        <tr>
            <td rowspan="2">V 0.0.5</td>
            <td>Add Product Card and card style</td>
        </tr>
        <tr>
            <td>Add handler for update inventory</td>
        </tr>
        <tr>
            <td rowspan="4">V 0.0.8</td>
            <td>Add react-icons</td>
        </tr>
        <tr>
            <td>Extract Product Image from ProductCard </td>
        </tr>
        <tr>
            <td>Extract Product Info from ProductCard </td>
        </tr>
        <tr>
            <td>Add counter button style</td>
        </tr>
        <tr>
            <td rowspan="2">V 0.1.0</td>
            <td>Extract Inventory Counter from ProductInfo</td>
        </tr>
        <tr>
            <td>Update Product Image style</td>
        </tr>
        <tr>
            <td>V 0.1.1</td>
            <td>Update Product counter button style</td>
        </tr>
        <tr>
            <td>V 0.1.3</td>
            <td>Add Settings Modal and modal style</td>
        </tr>
        <tr>
            <td>V 0.1.4</td>
            <td>Update Settings Modal style</td>
        </tr>
        <tr>
            <td rowspan="3" style="text-align: center; font-weight: bolder;">2023-08-14</td>
            <td rowspan="2" style="font-weight: bolder;">V 0.2.0</td>
            <td>New Feature：Can update product information. Level 2 and Level 3 finished.</td>
        </tr>
        <tr>
            <td>Update settings modal style.</td>
        </tr>
        <tr>
            <td>V 0.2.1</td>
            <td>Add screenshot section.</td>
        </tr>
        <tr>
            <td rowspan="3">2023-08-17</td>
            <td rowspan="2">V 0.3.0</td>
            <td>New Feature：Add validation to input.</td>
        </tr>
        <tr>
            <td>Modify handle function name.</td>
        </tr>
        <tr>
            <td>V 0.3.1</td>
            <td>Add validation screenshot</td>
        </tr>
        <tr>
            <td rowspan="4">2023-08-19</td>
            <td>V 0.3.2</td>
            <td>Add logo.svg and update favicon</td>
        </tr>
        <tr>
            <td>V 0.3.3</td>
            <td>Refactoring App：add useContext hook.</td>
        </tr>
        <tr>
            <td rowspan="2">V 0.3.4</td>
            <td>Refactoring App：Add InventoryProvider.jsx</td>
        </tr>
        <tr>
            <td>Refactoring Component：ProductCard.jsx, ProductInfo.jsx, InventoryCounter.jsx</td>
        </td>
        <tr>
            <td rowspan="4">2023-08-20</td>
            <td rowspan="2">V 0.3.5</td>
            <td>Refactoring Component：SettingModal.jsx</td>
        </tr>
        <tr>
            <td>Update products.json：Change id => productId, name => productName</td>
        </tr>
        <tr>
            <td rowspan="2">V 0.3.6</td>
            <td>Change component：ProductCard => InventoryCard, ProductInfo => InventoryInfo</td>
        </tr>
        <tr>
            <td>Add inventory stylesheet：Extract inventory style to inventory stylesheet</td>
        </tr>
        <tr>
            <td rowspan="9">2023-08-25</td>
            <td rowspan="2">V 0.3.7</td>
            <td>Add Navbar：Navbar.jsx, navbar.css and icons</td>
        </tr>
        <tr>
            <td>Add react-router</td>
        </tr>
        <tr>
            <td>V 0.3.8</td>
            <td>fixed bug：open setting modal</td>
        </tr>
        <tr>
            <td rowspan="2">V 0.4.0</td>
            <td>Add Sidebar：Sidebar.jsx, sidebar.css</td>
        </tr>
        <tr>
            <td>Update Navbar style</td>
        </tr>
        <tr>
            <td rowspan="2">V 0.4.1</td>
            <td>Add Error Page：ErrorPage.jsx</td>
        </tr>
        <tr>
            <td>Add Inventory Page</td>
        </tr>
        <tr>
            <td rowspan="2">V 0.4.2</td>
            <td>Add Order page and style</td>
        </tr>
        <tr>
            <td>Add sidebar active style</td>
        </tr>
        <tr>
            <td rowspan="3">2023-08-26</td>
            <td rowspan="2">V 0.4.3</td>
            <td>Add Home page：Home.jsx, MenuCard.jsx menu.css</td>
        </tr>
        <tr>
            <td>Add products data rating field</td>
        </tr>
        <tr>
            <td>V 0.4.4</td>
            <td>Fix react router production path</td>
        </tr>
        <tr>
            <td rowspan="3">2023-08-27</td>
            <td rowspan="3">V 0.4.5</td>
            <td>Add homework second week description.</td>
        </tr>
        <tr>
            <td>New feature：Sidebar auto close when click item</td>
        </tr>
        <tr>
            <td>Update MenuCard style</td>
        </tr>
        <tr>
            <td rowspan="5">2023-08-30</td>
            <td rowspan="4">V 0.5.0</td>
            <td>New Features：add/edit order information</td>
        </tr>
        <tr>
            <td>Add OrderCard、OrderMemo、OrderProduct、OrderReceipt components</td>
        </tr>
        <tr>
            <td>Add Order page, order style and OrderProvider (week 2 level 2 finished)</td>
        </tr>
        <tr>
            <td>Add productType.js (drinkType)</td>
        </tr>
        <tr>
            <td>V 0.5.1</td>
            <td>Fix bug：update memo</td>
        </tr>
    </tbody>
</table>