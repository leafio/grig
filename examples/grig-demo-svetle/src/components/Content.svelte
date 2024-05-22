<script lang="ts">
  import { derived } from "svelte/store";
    import { tMessages } from "../lang/init";
    const t = tMessages({
        zh: {
            'world': '世界',
            appleNum:'苹果的数量',
            keepState: '不能保持状态',
            list: {
                apple: '苹果',
                orange: '橘子',
                pear: '梨'
            },
            own: (count: number) => `我有${count}个苹果`,
            eat: (appleNum: number, pearNum: number) => `我吃了${appleNum}个苹果和${pearNum}个梨`
        },
        en: {
            'world': 'World',
            appleNum:'The quantity of apples',
            keepState: 'Could not keep state',
            list: {
                apple: 'Apple',
                orange: 'Orange',
                pear: 'Pear'
            },
            own: (count: number) => count === 1 ? 'I have an apple' : `I have ${count} apples`,
            eat: (appleNum: number, pearNum: number) => {
                return (appleNum === 1 ? 'I have an apple' : `I have ${appleNum} apples`) + ' and ' +
                    (pearNum === 1 ? 'a pear' : ` ${pearNum} pears`)
            }
        }
    })

    const options =derived(t,$t=> [{
        label: $t('list.apple'),
        value: 0
    }, {
        label: $t('list.orange'),
        value: 1
    }, {
        label: $t('list.pear'),
        value: 2
    }])

  
    let appleNum=1
    
    const onInputChange=(e: { target: any; })=>{
    appleNum=(Number(e?.target ?.value ?? 0))
    }
  </script>
  


  <div class="content card">
    <div>child: Content.svelte</div>
    <span>{$t("g_welcome")}</span>

    <div class="state card">
        <div>{$t('keepState')}</div>
        <div>
            {$t('appleNum')}:
            <input type="number" value={appleNum} on:change={onInputChange} min="0" max="10" />
        </div>
        <div>{$t("own", appleNum)}</div>
    </div>

    <div>{$t('eat', 1, 2)}</div>
    <select>
        {#each $options as p }
        <option >{p.label}</option>
        {/each}
    </select>
</div>
  